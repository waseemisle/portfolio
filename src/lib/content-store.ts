import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "./firebase";
import { basePath } from "./base-path";
import * as defaults from "./content";

/* ---------------------------------------------------------------------- */
/* Types                                                                   */
/* ---------------------------------------------------------------------- */

export type SiteSettings = {
  name: string;
  role: string;
  heroLines: string[];
  tagline: string;
  email: string;
  phone: string;
  phoneHref: string;
  linkedin: string;
  location: string;
  avatarUrl: string;
  resumeUrl: string;
};

export type Pillar = { title: string; body: string };
export type ExpertiseCard = { title: string; body: string };

export type FeaturedIntegration = {
  eyebrow: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  architectureTitle: string;
  architectureDescription: string;
  flow: string[];
};

export type FinalCta = { title: string; body: string };

export type HomeContent = {
  platforms: string[];
  pillars: Pillar[];
  expertiseIntro: string;
  expertise: ExpertiseCard[];
  featuredIntegration: FeaturedIntegration;
  finalCta: FinalCta;
};

export type Stat = { value: string; label: string };

export type AboutContent = {
  bio: string[];
  availability: string;
  stats: Stat[];
};

export type ProjectDoc = {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  order: number;
};

export type ExperienceDoc = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  order: number;
};

export type EducationDoc = {
  id: string;
  school: string;
  degree: string;
  period: string;
  order: number;
};

export type SkillGroupDoc = {
  id: string;
  title: string;
  skills: string[];
  order: number;
};

export type VisitDoc = {
  id: string;
  path: string;
  referrer: string;
  userAgent: string;
  ip: string;
  city: string;
  region: string;
  country: string;
  createdAt: number;
};

/* ---------------------------------------------------------------------- */
/* Defaults (fallback used for static prerender + until Firestore loads)  */
/* ---------------------------------------------------------------------- */

export const defaultSiteSettings: SiteSettings = {
  name: defaults.site.name,
  role: defaults.site.role,
  heroLines: defaults.site.heroLines,
  tagline: defaults.site.tagline,
  email: defaults.site.email,
  phone: defaults.site.phone,
  phoneHref: defaults.site.phoneHref,
  linkedin: defaults.site.linkedin,
  location: defaults.site.location,
  avatarUrl: `${basePath}/waseem.jpg`,
  resumeUrl: defaults.site.resumeFile,
};

export const defaultHomeContent: HomeContent = {
  platforms: defaults.platforms,
  pillars: defaults.pillars,
  expertiseIntro: defaults.expertiseIntro,
  expertise: defaults.expertise,
  featuredIntegration: {
    ...defaults.featuredIntegration,
    flow: ["Shopify", "Magento", "NetSuite"],
  },
  finalCta: defaults.finalCta,
};

export const defaultAboutContent: AboutContent = {
  bio: defaults.about.bio,
  availability: defaults.about.availability,
  stats: defaults.about.stats,
};

export const defaultProjects: ProjectDoc[] = defaults.projects.map((p, i) => ({
  ...p,
  id: p.slug,
  order: i,
}));

export const defaultExperience: ExperienceDoc[] = defaults.experience.map((e, i) => ({
  ...e,
  id: `${e.company}-${e.role}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  order: i,
}));

export const defaultEducation: EducationDoc[] = defaults.education.map((e, i) => ({
  ...e,
  id: e.school.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  order: i,
}));

export const defaultSkillGroups: SkillGroupDoc[] = defaults.skillGroups.map((s, i) => ({
  ...s,
  id: s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  order: i,
}));

/* ---------------------------------------------------------------------- */
/* Firestore paths                                                        */
/* ---------------------------------------------------------------------- */

const SITE_DOC = doc(db, "content", "site");
const HOME_DOC = doc(db, "content", "home");
const ABOUT_DOC = doc(db, "content", "about");
const PROJECTS_COL = collection(db, "projects");
const EXPERIENCE_COL = collection(db, "experience");
const EDUCATION_COL = collection(db, "education");
const SKILLS_COL = collection(db, "skillGroups");
const VISITS_COL = collection(db, "visits");

/* ---------------------------------------------------------------------- */
/* Fetchers — one-time reads, fall back to defaults on any error          */
/* ---------------------------------------------------------------------- */

export async function fetchSiteSettings(): Promise<SiteSettings> {
  try {
    const snap = await getDoc(SITE_DOC);
    if (!snap.exists()) return defaultSiteSettings;
    return { ...defaultSiteSettings, ...(snap.data() as Partial<SiteSettings>) };
  } catch {
    return defaultSiteSettings;
  }
}

export async function fetchHomeContent(): Promise<HomeContent> {
  try {
    const snap = await getDoc(HOME_DOC);
    if (!snap.exists()) return defaultHomeContent;
    return { ...defaultHomeContent, ...(snap.data() as Partial<HomeContent>) };
  } catch {
    return defaultHomeContent;
  }
}

export async function fetchAboutContent(): Promise<AboutContent> {
  try {
    const snap = await getDoc(ABOUT_DOC);
    if (!snap.exists()) return defaultAboutContent;
    return { ...defaultAboutContent, ...(snap.data() as Partial<AboutContent>) };
  } catch {
    return defaultAboutContent;
  }
}

async function fetchOrderedCollection<T>(
  col: typeof PROJECTS_COL,
  fallback: T[]
): Promise<T[]> {
  try {
    const q = query(col, orderBy("order", "asc"));
    const snap = await getDocs(q);
    if (snap.empty) return fallback;
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as T);
  } catch {
    return fallback;
  }
}

export const fetchProjects = () => fetchOrderedCollection<ProjectDoc>(PROJECTS_COL, defaultProjects);
export const fetchExperience = () => fetchOrderedCollection<ExperienceDoc>(EXPERIENCE_COL, defaultExperience);
export const fetchEducation = () => fetchOrderedCollection<EducationDoc>(EDUCATION_COL, defaultEducation);
export const fetchSkillGroups = () => fetchOrderedCollection<SkillGroupDoc>(SKILLS_COL, defaultSkillGroups);

/* ---------------------------------------------------------------------- */
/* Writers — admin-only (Firestore rules enforce this server-side)        */
/* ---------------------------------------------------------------------- */

export const saveSiteSettings = (data: SiteSettings) => setDoc(SITE_DOC, data);
export const saveHomeContent = (data: HomeContent) => setDoc(HOME_DOC, data);
export const saveAboutContent = (data: AboutContent) => setDoc(ABOUT_DOC, data);

export async function createProject(data: Omit<ProjectDoc, "id">) {
  const ref = await addDoc(PROJECTS_COL, data);
  return ref.id;
}
export const updateProject = (id: string, data: Partial<Omit<ProjectDoc, "id">>) =>
  updateDoc(doc(db, "projects", id), data);
export const deleteProject = (id: string) => deleteDoc(doc(db, "projects", id));

export async function createExperience(data: Omit<ExperienceDoc, "id">) {
  const ref = await addDoc(EXPERIENCE_COL, data);
  return ref.id;
}
export const updateExperience = (id: string, data: Partial<Omit<ExperienceDoc, "id">>) =>
  updateDoc(doc(db, "experience", id), data);
export const deleteExperience = (id: string) => deleteDoc(doc(db, "experience", id));

export async function createEducation(data: Omit<EducationDoc, "id">) {
  const ref = await addDoc(EDUCATION_COL, data);
  return ref.id;
}
export const updateEducation = (id: string, data: Partial<Omit<EducationDoc, "id">>) =>
  updateDoc(doc(db, "education", id), data);
export const deleteEducation = (id: string) => deleteDoc(doc(db, "education", id));

export async function createSkillGroup(data: Omit<SkillGroupDoc, "id">) {
  const ref = await addDoc(SKILLS_COL, data);
  return ref.id;
}
export const updateSkillGroup = (id: string, data: Partial<Omit<SkillGroupDoc, "id">>) =>
  updateDoc(doc(db, "skillGroups", id), data);
export const deleteSkillGroup = (id: string) => deleteDoc(doc(db, "skillGroups", id));

/* ---------------------------------------------------------------------- */
/* Visits (public create, admin-only read via Firestore rules)            */
/* ---------------------------------------------------------------------- */

export async function logVisit(data: Omit<VisitDoc, "id" | "createdAt">) {
  return addDoc(VISITS_COL, { ...data, createdAt: Date.now() });
}

export async function fetchVisits(limitCount = 500): Promise<VisitDoc[]> {
  const q = query(VISITS_COL, orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.slice(0, limitCount).map((d) => ({ id: d.id, ...d.data() }) as VisitDoc);
}

/* ---------------------------------------------------------------------- */
/* One-time seed — pushes content.ts defaults into Firestore if empty     */
/* ---------------------------------------------------------------------- */

export async function seedDefaultsIfEmpty() {
  const results: string[] = [];

  const siteSnap = await getDoc(SITE_DOC);
  if (!siteSnap.exists()) {
    await saveSiteSettings(defaultSiteSettings);
    results.push("site");
  }

  const homeSnap = await getDoc(HOME_DOC);
  if (!homeSnap.exists()) {
    await saveHomeContent(defaultHomeContent);
    results.push("home");
  }

  const aboutSnap = await getDoc(ABOUT_DOC);
  if (!aboutSnap.exists()) {
    await saveAboutContent(defaultAboutContent);
    results.push("about");
  }

  const projectsSnap = await getDocs(PROJECTS_COL);
  if (projectsSnap.empty) {
    for (const p of defaultProjects) {
      const { id: _id, ...rest } = p;
      await addDoc(PROJECTS_COL, rest);
    }
    results.push("projects");
  }

  const experienceSnap = await getDocs(EXPERIENCE_COL);
  if (experienceSnap.empty) {
    for (const e of defaultExperience) {
      const { id: _id, ...rest } = e;
      await addDoc(EXPERIENCE_COL, rest);
    }
    results.push("experience");
  }

  const educationSnap = await getDocs(EDUCATION_COL);
  if (educationSnap.empty) {
    for (const e of defaultEducation) {
      const { id: _id, ...rest } = e;
      await addDoc(EDUCATION_COL, rest);
    }
    results.push("education");
  }

  const skillsSnap = await getDocs(SKILLS_COL);
  if (skillsSnap.empty) {
    for (const s of defaultSkillGroups) {
      const { id: _id, ...rest } = s;
      await addDoc(SKILLS_COL, rest);
    }
    results.push("skillGroups");
  }

  return results;
}

/* ---------------------------------------------------------------------- */
/* Reset — overwrites Firestore with content.ts defaults unconditionally  */
/* ---------------------------------------------------------------------- */

async function overwriteCollection<T extends { id: string }>(
  col: typeof PROJECTS_COL,
  items: T[]
) {
  const existing = await getDocs(col);
  await Promise.all(existing.docs.map((d) => deleteDoc(d.ref)));
  for (const item of items) {
    const { id: _id, ...rest } = item;
    await addDoc(col, rest);
  }
}

export async function resetToDefaults() {
  await saveSiteSettings(defaultSiteSettings);
  await saveHomeContent(defaultHomeContent);
  await saveAboutContent(defaultAboutContent);
  await overwriteCollection(PROJECTS_COL, defaultProjects);
  await overwriteCollection(EXPERIENCE_COL, defaultExperience);
  await overwriteCollection(EDUCATION_COL, defaultEducation);
  await overwriteCollection(SKILLS_COL, defaultSkillGroups);
}
