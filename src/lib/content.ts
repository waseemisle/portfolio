import { basePath } from "./base-path";

export const site = {
  name: "Waseem Akhtar",
  role: "NetSuite Administrator · Solution Architect · SuiteScript Developer · Solutions Consultant",
  heroLines: ["I own NetSuite systems", "end to end —", "advisory through production."],
  tagline:
    "7+ years across the full NetSuite lifecycle: discovery workshops and BRD/FRD documentation, solution architecture and SuiteScript development, system administration and governance, and post-go-live hypercare. 20+ enterprise engagements spanning manufacturing, retail, distribution, logistics, healthcare, and eCommerce.",
  email: "waseemisle@gmail.com",
  phone: "+92 321 2134142",
  phoneHref: "+923212134142",
  linkedin: "https://www.linkedin.com/in/waseemakhtarr/",
  location: "Karachi, Pakistan (Remote)",
  resumeFile: `${basePath}/WaseemAkhtar_NetSuite_Technical_Consultant.pdf`,
};

export const platforms = [
  "Shopify",
  "WooCommerce",
  "Magento",
  "BigCommerce",
  "Salesforce",
  "HubSpot",
  "Amazon",
  "Walmart",
  "eBay",
  "Wayfair",
  "QuickBooks",
  "SOS Inventory",
  "Celigo",
  "Dell Boomi",
  "FarApp",
  "Square",
  "Joor",
  "Stripe",
  "Zendesk",
];

export const nav = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Engagements", href: "/engagements" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export const pillars = [
  {
    title: "Own the Full Picture",
    body: "I sit across advisory, functional design, technical development, and administration — so nothing gets lost in translation between what the business needs and what the system actually does.",
  },
  {
    title: "Build for the Business, Not the Demo",
    body: "Requirements become documented, business-approved design. Design becomes governed, production-grade configuration and code — not defaults nobody signed off on.",
  },
  {
    title: "Stay Through Production",
    body: "I stay through go-live and beyond — hypercare, administration, continuous improvement — because a system that breaks in week two isn't actually done.",
  },
];

export type LifecycleStage = {
  stage: string;
  roleLabel: string;
  description: string;
};

export const lifecycle: LifecycleStage[] = [
  {
    stage: "Discover",
    roleLabel: "Business & Systems Analysis",
    description:
      "Run discovery workshops with finance, operations, and warehouse stakeholders; document current-state process and business requirements.",
  },
  {
    stage: "Design",
    roleLabel: "Solution Architecture",
    description:
      "Translate requirements into target-state NetSuite design — fit-gap analysis, data model, integration architecture, governance model.",
  },
  {
    stage: "Build",
    roleLabel: "Functional & Technical Development",
    description:
      "Configure roles, workflows, forms, and reporting; build the SuiteScript and SuiteFlow logic that makes the design real.",
  },
  {
    stage: "Integrate",
    roleLabel: "Integration Engineering",
    description:
      "Connect NetSuite to commerce, CRM, marketplace, and financial systems with real-time, governed, bidirectional sync.",
  },
  {
    stage: "Deploy",
    roleLabel: "Delivery & Change Management",
    description:
      "Coordinate UAT, run end-user training, and manage go-live cutover so the business adopts the system, not just receives it.",
  },
  {
    stage: "Support",
    roleLabel: "Administration & Hypercare",
    description:
      "Own the system after go-live — security, releases, data integrity, and continuous improvement.",
  },
];

export const capabilitiesIntro =
  "Five disciplines, one person — from the discovery workshop to the production system, I own every stage most teams split across five different hires.";

export type CapabilityGroup = {
  title: string;
  roleTag: string;
  body: string;
  bullets: string[];
};

export const capabilities: CapabilityGroup[] = [
  {
    title: "Advisory & Solution Design",
    roleTag: "Solution Architect · Solutions Consultant",
    body: "Lead discovery, evaluate fit-gap, and design the target-state system — the layer that sits between what the business asks for and what gets built.",
    bullets: [
      "Discovery Workshops",
      "Current/Future-State Process Mapping",
      "Fit-Gap Analysis",
      "Solution Design Documentation",
      "Platform Evaluation",
      "Stakeholder Alignment",
    ],
  },
  {
    title: "Functional Configuration & Business Process",
    roleTag: "Functional Consultant",
    body: "Configure NetSuite to match business policy — not system defaults. Own Order-to-Cash and Procure-to-Pay design end to end.",
    bullets: [
      "BRD/FRD Documentation",
      "Order-to-Cash (O2C)",
      "Procure-to-Pay (P2P)",
      "Roles & Permissions Design",
      "Approval Workflow Design",
      "Custom Forms, Records & Saved Searches",
      "UAT Coordination & End-User Training",
    ],
  },
  {
    title: "Technical Development",
    roleTag: "Technical Consultant · SuiteScript Developer",
    body: "Build the system itself — production-grade, governance-aware SuiteScript, SuiteFlow, and SDF projects, not one-off customizations.",
    bullets: [
      "SuiteScript 2.x",
      "SuiteFlow",
      "SDF",
      "RESTlets & Suitelets",
      "User Events & Scheduled Scripts",
      "Map/Reduce",
      "SuiteAnalytics",
    ],
  },
  {
    title: "Integration & Platform Engineering",
    roleTag: "Integration Engineer",
    body: "Connect NetSuite to the commerce, CRM, marketplace, and financial systems the business actually runs on — real-time, resilient, and built to survive peak load.",
    bullets: [
      "REST & SOAP APIs",
      "Celigo & Dell Boomi",
      "Custom AWS Middleware",
      "Webhooks & EDI",
      "Error Handling & Monitoring",
      "Multi-Channel, Multi-Country Sync",
    ],
  },
  {
    title: "Administration & Governance",
    roleTag: "NetSuite Administrator",
    body: "Own the live system after go-live — the least visible work and the most load-bearing: security, releases, data integrity, continuous improvement.",
    bullets: [
      "Role & Permission Governance",
      "Release Management",
      "Data Integrity & Auditing",
      "Production Support & Hypercare",
      "System Documentation",
      "Change Control",
    ],
  },
];

export type FlagshipEngagement = {
  eyebrow: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  architectureTitle: string;
  architectureDescription: string;
  flow: string[];
};

export const flagshipEngagements: FlagshipEngagement[] = [
  {
    eyebrow: "Flagship Engagement — Integration & Platform Engineering",
    title:
      "A custom AWS middleware platform connecting NetSuite to five European 3PL and carrier networks in real time.",
    role: "Integration Architect & Lead Developer",
    description:
      "Architected and built a custom AWS Connector App handling inventory sync, sales orders, purchase orders, item receipts, and price synchronization across 5 countries — replacing manual reconciliation with governed, real-time data flow between NetSuite, VOS Logistics, Royal Mail, DPD, and ILG.",
    tags: [
      "Solution Architecture",
      "AWS Middleware",
      "SuiteScript 2.x",
      "REST APIs",
      "Map/Reduce",
      "Multi-Country",
      "Production Support",
    ],
    architectureTitle: "Multi-Carrier 3PL Integration Architecture",
    architectureDescription:
      "NetSuite ERP connected to a custom AWS middleware layer, syncing five European 3PL and carrier platforms with automated error handling and real-time inventory accuracy across markets.",
    flow: ["NetSuite", "AWS Middleware", "3PL & Carrier Networks"],
  },
  {
    eyebrow: "Flagship Engagement — Advisory Through Production",
    title:
      "A multi-storefront eCommerce rollout — from discovery workshops to a live, real-time NetSuite integration.",
    role: "Functional & Technical Lead",
    description:
      "Ran discovery workshops with merchandising, finance, and fulfillment teams to document requirements and fit-gap analysis, then architected and built the integration framework connecting NetSuite to Shopify and Magento storefronts — real-time product, order, inventory, and customer sync, cutting manual data entry by 90%.",
    tags: [
      "Discovery Workshops",
      "BRD/FRD",
      "Fit-Gap Analysis",
      "SuiteScript 2.x",
      "Celigo",
      "Real-Time Sync",
      "UAT & End-User Training",
    ],
    architectureTitle: "NetSuite Commerce Integration Architecture",
    architectureDescription:
      "Multi-platform eCommerce connected to NetSuite ERP with real-time bidirectional data flow, automated workflows, and comprehensive error handling.",
    flow: ["Shopify", "Magento", "NetSuite"],
  },
  {
    eyebrow: "Flagship Engagement — Functional Consulting & Administration",
    title: "End-to-end functional ownership of NetSuite for a global manufacturer.",
    role: "NetSuite Consultant",
    description:
      "Owned functional and technical consulting across finance, inventory, procurement, and order management — gathering requirements from finance and operations stakeholders, configuring workflows, custom forms, saved searches, dashboards, and SuiteAnalytics reports, and supporting integrations with Shopify, Dell Boomi, and third-party logistics providers through to post-go-live support and training.",
    tags: [
      "Requirements Gathering",
      "Workflow Configuration",
      "Custom Forms & Fields",
      "SuiteAnalytics",
      "Production Support",
      "End-User Training",
    ],
    architectureTitle: "Cross-Functional ERP Ownership",
    architectureDescription:
      "Finance, inventory, and procurement stakeholders' requirements translated into configured NetSuite workflows and reporting, integrated with commerce and logistics platforms, and supported end to end.",
    flow: ["Stakeholders", "NetSuite Configuration", "Production Support"],
  },
];

export type Project = {
  slug: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  group: string;
};

export const projects: Project[] = [
  {
    slug: "shopify",
    category: "Shopify",
    title: "NetSuite Shopify Integration",
    description:
      "Delivered full-cycle integration enabling automated synchronization of sales orders, products, customers, and inventory between NetSuite and Shopify storefronts for a fashion retail brand — eliminating manual order entry entirely.",
    tags: ["Sales Orders Sync", "Products Sync", "Customers Sync", "Inventory Sync"],
    group: "Commerce & Retail",
  },
  {
    slug: "bigcommerce",
    category: "BigCommerce",
    title: "NetSuite BigCommerce Integration",
    description:
      "Built a comprehensive integration covering product catalog, orders, inventory levels, customer profiles, and dynamic price levels for an industrial supplies distributor, replacing a daily manual export/import process.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync", "Price Levels"],
    group: "Commerce & Retail",
  },
  {
    slug: "magento2",
    category: "Magento2",
    title: "NetSuite Magento2 Integration",
    description:
      "Delivered an automotive industry integration connecting NetSuite with Magento2 for unified product, order, inventory, and customer management across every sales channel.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync", "Price Levels"],
    group: "Commerce & Retail",
  },
  {
    slug: "amazon",
    category: "Amazon",
    title: "NetSuite Amazon Integration",
    description:
      "Implemented an automotive industry integration connecting NetSuite with Amazon Marketplace, keeping fulfillment, inventory, and order data in sync without manual reconciliation.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync"],
    group: "Marketplaces & POS",
  },
  {
    slug: "woocommerce",
    category: "WooCommerce",
    title: "NetSuite WooCommerce Integration",
    description:
      "Developed an end-to-end WooCommerce integration with automated product, order, inventory, customer, and payment synchronization to NetSuite for a luxury lifestyle brand.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync", "Payments Sync"],
    group: "Commerce & Retail",
  },
  {
    slug: "magento-electronics",
    category: "Magento",
    title: "NetSuite Magento Integration",
    description:
      "Built an integration managing product catalog, orders, inventory, and customer data on Magento for a consumer electronics retailer with high SKU turnover.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync"],
    group: "Commerce & Retail",
  },
  {
    slug: "shopify-electronics",
    category: "Shopify",
    title: "NetSuite Shopify Integration — Consumer Electronics",
    description:
      "Delivered an integration managing product catalog, orders, inventory, and customer data on Shopify for a consumer electronics retailer, syncing in near real time.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync"],
    group: "Commerce & Retail",
  },
  {
    slug: "shopify-wholesale-retail",
    category: "Shopify",
    title: "NetSuite Shopify Integration — Wholesale & Retail",
    description:
      "Architected a fashion industry integration connecting NetSuite with Shopify for B2C retail operations, syncing products, orders, inventory, and customers across storefronts.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync"],
    group: "Commerce & Retail",
  },
  {
    slug: "joor-wholesale-retail",
    category: "Joor",
    title: "NetSuite Joor Integration — Wholesale & Retail",
    description:
      "Delivered a fashion industry integration connecting NetSuite with Joor for B2B wholesale operations, syncing products, orders, inventory, and customers between systems.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync"],
    group: "Wholesale & Distribution",
  },
  {
    slug: "square",
    category: "Square",
    title: "NetSuite Square Integration",
    description:
      "Built a retail POS integration syncing transactions, items, and customers with automated journal entry creation in NetSuite, closing the books without manual entry.",
    tags: ["Transactions Sync", "Items Sync", "JE Creation", "Customer Sync"],
    group: "Marketplaces & POS",
  },
  {
    slug: "joor",
    category: "Joor",
    title: "Joor NetSuite Integration",
    description:
      "Developed a B2B wholesale platform integration handling sales orders, products, UPC codes, and customer data synchronization with NetSuite for a fashion brand.",
    tags: ["Sales Orders", "Products Sync", "UPC Sync", "Customers Sync"],
    group: "Wholesale & Distribution",
  },
  {
    slug: "sos-inventory",
    category: "SOS Inventory",
    title: "NetSuite SOS Inventory Integration",
    description:
      "Configured an integration connecting NetSuite with SOS Inventory for stock management, syncing sales orders, products, UPCs, and customer records across both systems.",
    tags: ["Sales Orders", "Products Sync", "UPC Sync", "Customers Sync"],
    group: "Wholesale & Distribution",
  },
  {
    slug: "stripe",
    category: "Stripe",
    title: "NetSuite Stripe Integration",
    description:
      "Implemented an integration connecting NetSuite with Stripe for automated payment processing and reconciliation, closing the gap between payment capture and cash application.",
    tags: ["Payment Sync", "Customers Sync"],
    group: "Financial Systems",
  },
  {
    slug: "quickbooks",
    category: "QuickBooks",
    title: "NetSuite QuickBooks Integration",
    description:
      "Built an accounting system bridge enabling payment synchronization and consolidated financial reporting between NetSuite and QuickBooks.",
    tags: ["Payment Sync", "Financial Reporting", "Invoice Sync"],
    group: "Financial Systems",
  },
  {
    slug: "salesforce",
    category: "Salesforce",
    title: "NetSuite Salesforce Integration",
    description:
      "Delivered an enterprise CRM-ERP integration for the software industry, syncing opportunities, estimates, and customer data between Salesforce and NetSuite.",
    tags: ["Opportunity Sync", "Estimates Sync", "Customers Sync"],
    group: "CRM & Sales",
  },
  {
    slug: "hubspot",
    category: "HubSpot",
    title: "NetSuite HubSpot Integration",
    description:
      "Developed an EdTech industry integration connecting HubSpot marketing and sales data with NetSuite for unified contact, company, and deal management.",
    tags: ["Contacts Sync", "Companies Sync", "Deals Sync"],
    group: "CRM & Sales",
  },
  {
    slug: "square-seafood",
    category: "Square",
    title: "NetSuite Square — Seafood Processing",
    description:
      "Delivered a specialized integration for the seafood processing industry, handling transactions, customer data, and inventory synchronization with NetSuite.",
    tags: ["Transactions Sync", "Customer Sync", "Inventory Sync"],
    group: "Marketplaces & POS",
  },
];

export const about = {
  bio: [
    "I own NetSuite systems end to end — from the first discovery workshop through solution design, configuration, development, integration, and production support. 7+ years across manufacturing, retail, wholesale distribution, logistics, healthcare, and eCommerce.",
    "I've led 20+ enterprise NetSuite engagements: gathering requirements, running fit-gap analysis, configuring roles, workflows, forms, and reporting, writing the SuiteScript and integration code, and staying through go-live to make sure it holds up in production — not just in a demo.",
    "That range is deliberate. Most teams split advisory, functional configuration, technical development, and administration across four different hires. I've done all four, on the same systems, long enough to know where they actually break.",
  ],
  availability:
    "Based in Karachi, Pakistan. Available for remote consulting, contract work, and full-time opportunities worldwide.",
  stats: [
    { value: "20+", label: "Enterprise Engagements Delivered" },
    { value: "7+", label: "Years Across the ERP Lifecycle" },
    { value: "15+", label: "Platforms & Systems Integrated" },
  ],
};

export const finalCta = {
  title: "Let's work together.",
  body: "I'm always up for a conversation about NetSuite — a system that needs an owner, a process that needs re-architecting, or a role where advisory judgment and hands-on technical depth both matter. Reach out and let's talk.",
};

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
    period: "Jul 2025 — Present",
    location: "Remote",
    bullets: [
      "Serve as the primary functional point of contact for finance and operations stakeholders, translating business policy into NetSuite roles, permissions, approval workflows, and custom forms.",
      "Own system administration and governance: security, role design, release management, and data integrity across the production instance.",
      "Configure and customize NetSuite using SuiteBuilder, SuiteFlow, Saved Searches, Custom Records, Custom Forms, Roles & Permissions, and SuiteAnalytics to support evolving business requirements.",
      "Design and maintain enterprise integrations between NetSuite and BigCommerce using FarApp, automating sync of customers, products, inventory, pricing, sales orders, fulfillments, shipments, and refunds.",
      "Develop and maintain accounting integrations between NetSuite and QuickBooks for invoice synchronization, payment reconciliation, and financial reporting.",
      "Configure NetSuite integration with SOS Inventory, automating synchronization of inventory, purchase orders, sales orders, customers, vendors, and invoices.",
      "Design secure authentication, role-based access control, and scalable APIs for GroundOps, a SaaS application built on Next.js, GraphQL, Firebase, Supabase, Tailwind CSS, and Stripe.",
    ],
  },
  {
    company: "Folio3 Pvt Ltd",
    role: "Senior NetSuite Product Engineer",
    period: "Jan 2021 — Sep 2025",
    location: "Karachi, Pakistan",
    bullets: [
      "Acted as technical and functional lead on enterprise-grade NetSuite integrations for Shopify, WooCommerce, Magento, BigCommerce, Salesforce, HubSpot, Zendesk, Amazon, Walmart, eBay, Wayfair, and Joor.",
      "Architected and built scalable SuiteScript 2.x solutions: User Events, Client Scripts, Scheduled Scripts, RESTlets, Suitelets, and Map/Reduce scripts.",
      "Engineered REST API integrations between NetSuite and external ERP, CRM, POS, warehouse, logistics, and accounting systems, using Dell Boomi, XML, JSON, GraphQL, and Webhooks.",
      "Developed reusable integration frameworks and solution design patterns that cut implementation effort across new customer environments.",
      "Ran client workshops, requirements gathering, and fit-gap analysis; produced technical design documents and delivered solution demos through to production deployment.",
      "Resolved production issues spanning SuiteScript governance, integration failures, fulfillment processing, tax calculations, and financial transactions.",
    ],
  },
  {
    company: "Amyris, Inc",
    role: "NetSuite Consultant",
    period: "Jan 2022 — Mar 2023",
    location: "Remote",
    bullets: [
      "Provided functional and technical consulting for Oracle NetSuite ERP across finance, inventory, procurement, and order management.",
      "Gathered requirements from finance and operations stakeholders and configured workflows, custom forms, custom fields, saved searches, dashboards, and SuiteAnalytics reports to meet business needs.",
      "Administered roles, permissions, and system settings, and supported enterprise integrations between NetSuite, Shopify, Dell Boomi, and third-party logistics providers.",
      "Investigated and resolved production issues related to customizations, integrations, transaction processing, and workflow automation.",
      "Delivered post-go-live support, end-user training, and continuous system improvements.",
    ],
  },
  {
    company: "Tecbz",
    role: "Software Engineer",
    period: "Mar 2019 — Nov 2020",
    location: "Karachi, Pakistan",
    bullets: [
      "Developed and optimized web applications using JavaScript, React, Redux, and Express.",
      "Collaborated with the marketing team on SEO strategy and content optimization to grow web traffic.",
      "Built dynamic, component-based UIs using Styled Components (CSS-in-JS).",
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
    title: "Advisory & Solution Design",
    skills: [
      "Discovery Workshops",
      "Requirements Gathering",
      "Fit-Gap Analysis",
      "Current/Future-State Process Mapping",
      "Solution Design Documentation",
      "Stakeholder Management",
    ],
  },
  {
    title: "Functional Configuration & Business Process",
    skills: [
      "BRD/FRD Documentation",
      "Order-to-Cash (O2C)",
      "Procure-to-Pay (P2P)",
      "Roles & Permissions Design",
      "Approval Workflow Design",
      "Custom Forms & Records",
      "Saved Searches & Dashboards",
      "UAT Coordination",
      "End-User Training",
      "Change Management",
    ],
  },
  {
    title: "Technical Development",
    skills: ["SuiteScript 2.x", "SuiteFlow", "SuiteAnalytics", "SDF", "RESTlets", "Suitelets", "User Events", "Map/Reduce", "Scheduled Scripts"],
  },
  {
    title: "Integration & Platform Engineering",
    skills: ["Celigo", "Dell Boomi", "FarApp", "REST APIs", "GraphQL", "Webhooks", "SFTP", "XML/JSON", "EDI", "AWS Middleware"],
  },
  {
    title: "Administration & Governance",
    skills: [
      "Role & Permission Governance",
      "Release Management",
      "Data Integrity & Auditing",
      "Production Support & Hypercare",
      "System Documentation",
      "Change Control",
    ],
  },
  {
    title: "Commerce, CRM & Marketplace Platforms",
    skills: ["Shopify", "BigCommerce", "WooCommerce", "Magento", "Salesforce", "HubSpot", "Zendesk", "Amazon", "Walmart", "eBay"],
  },
  {
    title: "Product Engineering",
    skills: ["Next.js", "React", "Node.js", "GraphQL", "Firebase", "Supabase", "Tailwind CSS", "Stripe"],
  },
];
