import { basePath } from "./base-path";

export const site = {
  name: "Waseem Akhtar",
  role: "Senior NetSuite Technical Consultant",
  tagline:
    "Senior NetSuite Technical Consultant & SuiteScript Developer connecting ERP systems with the platforms modern businesses run on.",
  email: "waseemisle@gmail.com",
  phone: "+92 321 2134142",
  phoneHref: "+923212134142",
  linkedin: "https://www.linkedin.com/in/waseemakhtarr/",
  location: "Karachi, Pakistan (Remote)",
  resumeFile: `${basePath}/WaseemAkhtar_NetSuite_Technical_Consultant.pdf`,
};

export const systems = [
  "Shopify",
  "BigCommerce",
  "WooCommerce",
  "Magento",
  "Salesforce",
  "HubSpot",
  "Square",
  "Amazon",
  "QuickBooks",
  "Joor",
  "SOS Inventory",
  "Zendesk",
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const pillars = [
  {
    title: "Unify Your Systems",
    body: "I connect NetSuite with the platforms your business runs on, creating one source of truth across sales, inventory, and finance.",
  },
  {
    title: "Automate The Manual",
    body: "I build reliable, real-time sync pipelines that remove manual data entry and eliminate costly reconciliation errors.",
  },
  {
    title: "Scale With Confidence",
    body: "I design integrations that hold up under growth — from a single storefront to multi-channel, multi-region operations.",
  },
];

export const expertise = [
  {
    title: "eCommerce & Retail",
    body: "Shopify, BigCommerce, WooCommerce, and Magento integrations syncing product, inventory, and order data in real time.",
  },
  {
    title: "Wholesale & Distribution",
    body: "Joor and EDI-driven integrations connecting B2B sales channels to NetSuite inventory, pricing, and fulfillment.",
  },
  {
    title: "Logistics & 3PL",
    body: "AWS-based middleware connectors syncing inventory, purchase orders, and item receipts with third-party logistics providers.",
  },
  {
    title: "Automotive & Industrial",
    body: "Multi-channel integrations across Magento, Amazon, and Shopify for automotive parts and industrial equipment sellers.",
  },
  {
    title: "Financial & Payments",
    body: "Square, Stripe, and QuickBooks integrations automating transaction sync, journal entries, and financial reporting.",
  },
  {
    title: "CRM & Enterprise Systems",
    body: "Salesforce and HubSpot integrations connecting sales pipelines and marketing data directly to NetSuite records.",
  },
];

export type Project = {
  slug: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "shopify",
    category: "Shopify",
    title: "NetSuite Shopify Integration",
    description:
      "Full-cycle integration enabling automated synchronization of sales orders, products, customers, and inventory between NetSuite and Shopify storefronts.",
    tags: ["Sales Orders Sync", "Products Sync", "Customers Sync", "Inventory Sync"],
  },
  {
    slug: "3pl-vos-logistics",
    category: "3PL / AWS",
    title: "NetSuite 3PL VOS Logistics",
    description:
      "Built a middleware AWS Connector App for Europe-based logistics, handling inventory sync, sales orders, purchase orders, item receipts, and price synchronization.",
    tags: ["Inventory Sync", "Sales Orders", "Purchase Orders", "Item Receipts", "Price Sync"],
  },
  {
    slug: "bigcommerce",
    category: "BigCommerce",
    title: "NetSuite BigCommerce Integration",
    description:
      "Comprehensive integration covering product catalog, orders, inventory levels, customer profiles, and dynamic price levels synchronization.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync", "Price Levels"],
  },
  {
    slug: "magento-amazon",
    category: "Magento + Amazon",
    title: "NetSuite Magento2 & Amazon",
    description:
      "Automotive industry integration connecting NetSuite with Magento2 and Amazon marketplace for unified product, order, inventory, and customer management.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync", "Price Levels"],
  },
  {
    slug: "woocommerce",
    category: "WooCommerce",
    title: "NetSuite WooCommerce Integration",
    description:
      "End-to-end WooCommerce integration with automated product, order, inventory, customer, and payment synchronization to NetSuite.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync", "Payments Sync"],
  },
  {
    slug: "magento-shopify",
    category: "Magento + Shopify",
    title: "NetSuite Magento & Shopify",
    description:
      "Dual-platform integration managing product catalogs, orders, inventory, and customer data across both Magento and Shopify storefronts.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync"],
  },
  {
    slug: "shopify-joor",
    category: "Shopify + Joor",
    title: "NetSuite Shopify & Joor",
    description:
      "Fashion industry integration connecting NetSuite with Shopify B2C and Joor B2B platforms for unified wholesale and retail operations.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync"],
  },
  {
    slug: "square",
    category: "Square",
    title: "NetSuite Square Integration",
    description:
      "Retail POS integration syncing transactions, items, and customers with automated journal entry creation in NetSuite for accurate financial reporting.",
    tags: ["Transactions Sync", "Items Sync", "JE Creation", "Customer Sync"],
  },
  {
    slug: "joor",
    category: "Joor",
    title: "Joor NetSuite Integration",
    description:
      "B2B wholesale platform integration handling sales orders, products, UPC codes, and customer data synchronization with NetSuite.",
    tags: ["Sales Orders", "Products Sync", "UPC Sync", "Customers Sync"],
  },
  {
    slug: "sos-stripe",
    category: "SOS + Stripe",
    title: "NetSuite SOS Inventory & Stripe",
    description:
      "Multi-system integration connecting NetSuite with SOS Inventory for stock management and Stripe for payment processing automation.",
    tags: ["Sales Orders", "Products Sync", "UPC Sync", "Customers Sync"],
  },
  {
    slug: "quickbooks",
    category: "QuickBooks",
    title: "NetSuite QuickBooks Integration",
    description:
      "Accounting system bridge enabling payment synchronization and consolidated financial reporting between NetSuite and QuickBooks.",
    tags: ["Payment Sync", "Financial Reporting", "Invoice Sync"],
  },
  {
    slug: "salesforce",
    category: "Salesforce",
    title: "NetSuite Salesforce Integration",
    description:
      "Enterprise CRM-ERP integration for the software industry, syncing opportunities, estimates, and customer data between Salesforce and NetSuite.",
    tags: ["Opportunity Sync", "Estimates Sync", "Customers Sync"],
  },
  {
    slug: "hubspot",
    category: "HubSpot",
    title: "NetSuite HubSpot Integration",
    description:
      "EdTech industry integration connecting HubSpot marketing and sales data with NetSuite for unified contact, company, and deal management.",
    tags: ["Contacts Sync", "Companies Sync", "Deals Sync"],
  },
  {
    slug: "square-seafood",
    category: "Square",
    title: "NetSuite Square — Seafood Processing",
    description:
      "Specialized integration for the seafood processing industry, handling transactions, customer data, and inventory synchronization with NetSuite.",
    tags: ["Transactions Sync", "Customer Sync", "Inventory Sync"],
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Shureprint",
    role: "NetSuite Administrator",
    period: "Nov 2025 — Present",
    location: "Remote",
    bullets: [
      "Configure and customize NetSuite using SuiteBuilder, SuiteFlow, Saved Searches, Custom Records, Custom Forms, Roles & Permissions, and SuiteAnalytics.",
      "Design and maintain enterprise integrations between NetSuite and BigCommerce via FarApp, automating customer, product, inventory, pricing, and fulfillment sync.",
      "Develop accounting integrations between NetSuite and QuickBooks for invoice sync, payment reconciliation, and financial reporting.",
      "Configure NetSuite integration with SOS Inventory, automating inventory, purchase orders, sales orders, customers, vendors, and invoices.",
      "Build GroundOps, a modern SaaS application using Next.js, GraphQL, Firebase, Supabase, Tailwind CSS, and Stripe.",
    ],
  },
  {
    company: "Folio3 Software",
    role: "Senior Software Product Engineer",
    period: "Jan 2023 — Nov 2025",
    location: "Karachi, Pakistan (Hybrid)",
    bullets: [
      "Designed enterprise-grade NetSuite integrations for Shopify, WooCommerce, Magento, BigCommerce, Salesforce, HubSpot, Zendesk, Amazon, Walmart, eBay, Wayfair, and Joor.",
      "Built scalable SuiteScript 2.x solutions: User Events, Client Scripts, Scheduled Scripts, RESTlets, Suitelets, and Map/Reduce scripts.",
      "Designed REST API integrations between NetSuite and external ERP, CRM, POS, warehouse, logistics, and accounting systems.",
      "Developed reusable integration frameworks that reduced implementation effort across customer environments.",
      "Delivered production integrations using Celigo, Dell Boomi, REST APIs, XML, JSON, GraphQL, and Webhooks.",
      "Led client workshops, technical design documentation, solution demos, and production deployments.",
    ],
  },
  {
    company: "Folio3 Software",
    role: "Software Product Engineer",
    period: "Dec 2021 — Jan 2023",
    location: "Karachi, Pakistan",
    bullets: [
      "Delivered NetSuite business process automation using SuiteFlow, custom records, custom forms, and workflows.",
      "Built and maintained SuiteScript integrations across multiple client environments.",
    ],
  },
  {
    company: "Folio3 Software",
    role: "Software Support Engineer",
    period: "Feb 2021 — Dec 2021",
    location: "Karachi, Pakistan",
    bullets: [
      "Provided production support for NetSuite implementations, resolving SuiteScript governance and integration issues.",
    ],
  },
  {
    company: "Amyris",
    role: "NetSuite Consultant",
    period: "Dec 2021 — Mar 2023",
    location: "California, United States",
    bullets: [
      "Developed and maintained NetSuite integrations across ERP, CRM, and supply chain management.",
      "Delivered Shopify Plus and app integrations ensuring seamless data flow and optimized user experience.",
      "Used Dell Boomi to integrate multiple systems, enhancing automation and process optimization.",
      "Built EDI integrations streamlining electronic data exchange with business partners.",
      "Designed custom dashboards and SuiteAnalytics reports for real-time financial insight, in line with SOX compliance.",
    ],
  },
  {
    company: "Tecbz",
    role: "Software Engineer",
    period: "Mar 2019 — Nov 2020",
    location: "Karachi, Pakistan",
    bullets: [
      "Developed and optimized web applications using JavaScript, React, Redux, and Express.",
      "Built dynamic, component-based UIs using Styled Components (CSS-in-JS).",
    ],
  },
  {
    company: "Capazyte",
    role: "Frontend Developer",
    period: "Apr 2019 — Aug 2019",
    location: "Karachi, Pakistan",
    bullets: [
      "Built responsive interfaces with React, Redux, and Bootstrap/Ant Design component libraries.",
    ],
  },
];

export const education = [
  {
    school: "Karachi Institute of Economics & Technology (KIET)",
    degree: "Bachelor of Engineering — Computer Software Engineering",
    period: "2015 — 2019",
  },
  {
    school: "NCR-CET College",
    degree: "Intermediate — Computer Science",
    period: "2011 — 2012",
  },
];

export const skillGroups = [
  {
    title: "NetSuite Development",
    skills: [
      "SuiteScript 2.x",
      "SuiteFlow",
      "SuiteAnalytics",
      "SDF",
      "RESTlets",
      "Suitelets",
      "User Events",
      "Map/Reduce",
      "Scheduled Scripts",
    ],
  },
  {
    title: "Integration Platforms",
    skills: ["Celigo", "Dell Boomi", "FarApp", "REST APIs", "GraphQL", "Webhooks", "SFTP", "XML/JSON", "EDI"],
  },
  {
    title: "Commerce & CRM",
    skills: [
      "Shopify",
      "BigCommerce",
      "WooCommerce",
      "Magento",
      "Salesforce",
      "HubSpot",
      "Zendesk",
      "Amazon",
      "Walmart",
      "eBay",
    ],
  },
  {
    title: "Product Engineering",
    skills: ["Next.js", "React", "Node.js", "GraphQL", "Firebase", "Supabase", "Tailwind CSS", "Stripe"],
  },
];

export const currentRoleTags = [
  "SUITESCRIPT",
  "SUITEFLOW",
  "FARAPP",
  "REST API",
  "WEBHOOKS",
  "STRIPE",
  "NEXT.JS",
  "SAAS",
];
