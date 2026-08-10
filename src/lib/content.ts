import { basePath } from "./base-path";

export const site = {
  name: "Waseem Akhtar",
  role: "Senior NetSuite Technical & Functional Consultant",
  heroLines: ["I architect the", "integrations that power", "enterprise growth."],
  tagline:
    "7+ years as a Senior NetSuite Technical & Functional Consultant, delivering 20+ enterprise integrations and implementations for 200+ clients across eCommerce, CRM, POS, and logistics — eliminating data silos, reducing manual effort by 90%, and unlocking measurable business value, while partnering with business stakeholders on requirements gathering, process design, and functional configuration across the full NetSuite implementation lifecycle.",
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
  "Square",
  "Joor",
  "Stripe",
  "Zendesk",
];

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Expertise", href: "/expertise" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const pillars = [
  {
    title: "Create Clarity",
    body: "I map complex business processes across your organization into clean, actionable ERP solutions that every team can understand and rely on — starting with discovery workshops, requirements gathering, and fit-gap analysis.",
  },
  {
    title: "Drive Efficiency",
    body: "I eliminate manual data entry and broken workflows by building real-time, bidirectional sync between NetSuite and your entire tech stack.",
  },
  {
    title: "Deliver Impact",
    body: "I measure every integration by business outcomes — faster order processing, accurate inventory, and ROI you can see in your bottom line.",
  },
];

export const expertiseIntro =
  "I turn fragmented systems and unclear processes into unified, automated, well-governed operations across every industry I touch.";

export const expertise = [
  {
    title: "NetSuite Functional Consulting",
    body: "Facilitate discovery workshops and requirements-gathering sessions with finance, operations, and warehouse stakeholders. Document business requirements (BRD/FRD), run fit-gap analysis, and configure roles, permissions, approval workflows, custom forms, saved searches, and SuiteAnalytics dashboards to match business policy.",
  },
  {
    title: "ERP Implementation & Business Process Design",
    body: "Design and configure Order-to-Cash, Procure-to-Pay, Inventory & Warehouse Management, and Financial Reporting processes end-to-end — from current/future-state process mapping through UAT coordination, end-user training, change management, and post-go-live hypercare.",
  },
  {
    title: "eCommerce & Retail",
    body: "Delivered end-to-end integrations between NetSuite and Shopify, WooCommerce, Magento, and BigCommerce for fashion, lifestyle, and consumer brands — syncing products, orders, inventory, customers, and pricing in real time.",
  },
  {
    title: "Manufacturing & Distribution",
    body: "Streamlined Order-to-Cash and Procure-to-Pay workflows for manufacturing clients, managing inventory, warehouse operations, and fulfillment automation at scale.",
  },
  {
    title: "Financial Services",
    body: "Integrated NetSuite with QuickBooks, Stripe, and Square for retail and food service businesses — automating payment reconciliation, financial reporting, and journal entry creation.",
  },
  {
    title: "Logistics & 3PL",
    body: "Built custom AWS middleware connectors for European 3PL logistics platforms including VOS Logistics, with further integrations across Royal Mail, DPD, and ILG for automated shipment tracking and inventory sync.",
  },
  {
    title: "CRM & Sales",
    body: "Built bi-directional sync between NetSuite and Salesforce, HubSpot for enterprise software and education technology companies — managing opportunities, estimates, contacts, and deals.",
  },
  {
    title: "Marketplaces & POS",
    body: "Delivered multi-channel integrations with Amazon, Walmart, eBay, Wayfair, and Square POS — unifying inventory and order management for automotive and specialty food industries.",
  },
];

export const featuredIntegration = {
  eyebrow: "Featured Integration",
  title:
    "I recently delivered a multi-platform eCommerce implementation and integration, connecting NetSuite with Shopify & Magento.",
  role: "Functional & Technical Integration Architect",
  description:
    "Ran discovery workshops to gather requirements from merchandising, finance, and fulfillment teams, then architected a scalable integration framework handling real-time product sync, order management, inventory updates, and customer data flow across multiple storefronts — reducing manual data entry by 90%.",
  tags: [
    "Requirements Gathering",
    "SuiteScript 2.x",
    "REST APIs",
    "Celigo",
    "Map/Reduce",
    "Real-time Sync",
    "Multi-channel",
    "Production Support",
  ],
  architectureTitle: "NetSuite Integration Architecture",
  architectureDescription:
    "Multi-platform eCommerce → NetSuite ERP with real-time bidirectional data flow, automated workflows, and comprehensive error handling.",
};

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
      "Delivered full-cycle integration enabling automated synchronization of sales orders, products, customers, and inventory between NetSuite and Shopify storefronts for a fashion retail brand.",
    tags: ["Sales Orders Sync", "Products Sync", "Customers Sync", "Inventory Sync"],
  },
  {
    slug: "vos-logistics-aws",
    category: "VOS Logistics · AWS",
    title: "NetSuite 3PL VOS Logistics",
    description:
      "Architected a custom AWS middleware Connector App for European 3PL logistics, handling inventory sync, sales orders, purchase orders, item receipts, and price synchronization across 5 countries.",
    tags: ["Inventory Sync", "Sales Orders", "Purchase Orders", "Item Receipts", "Price Sync"],
  },
  {
    slug: "bigcommerce",
    category: "BigCommerce",
    title: "NetSuite BigCommerce Integration",
    description:
      "Built a comprehensive integration covering product catalog, orders, inventory levels, customer profiles, and dynamic price levels synchronization for an industrial supplies distributor.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync", "Price Levels"],
  },
  {
    slug: "magento2",
    category: "Magento2",
    title: "NetSuite Magento2 Integration",
    description:
      "Delivered an automotive industry integration connecting NetSuite with Magento2 for unified product, order, inventory, and customer management.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync", "Price Levels"],
  },
  {
    slug: "amazon",
    category: "Amazon",
    title: "NetSuite Amazon Integration",
    description:
      "Implemented an automotive industry integration connecting NetSuite with Amazon marketplace for unified product, order, inventory, and customer management.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync"],
  },
  {
    slug: "woocommerce",
    category: "WooCommerce",
    title: "NetSuite WooCommerce Integration",
    description:
      "Developed an end-to-end WooCommerce integration with automated product, order, inventory, customer, and payment synchronization to NetSuite for a luxury lifestyle brand.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync", "Payments Sync"],
  },
  {
    slug: "magento-electronics",
    category: "Magento",
    title: "NetSuite Magento Integration",
    description:
      "Built an integration managing product catalog, orders, inventory, and customer data on Magento for a consumer electronics retailer.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync"],
  },
  {
    slug: "shopify-electronics",
    category: "Shopify",
    title: "NetSuite Shopify Integration — Consumer Electronics",
    description:
      "Delivered an integration managing product catalog, orders, inventory, and customer data on Shopify for a consumer electronics retailer.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync"],
  },
  {
    slug: "shopify-wholesale-retail",
    category: "Shopify",
    title: "NetSuite Shopify Integration — Wholesale & Retail",
    description:
      "Architected a fashion industry integration connecting NetSuite with Shopify for B2C retail operations, syncing products, orders, inventory, and customers.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync"],
  },
  {
    slug: "joor-wholesale-retail",
    category: "Joor",
    title: "NetSuite Joor Integration — Wholesale & Retail",
    description:
      "Delivered a fashion industry integration connecting NetSuite with Joor for B2B wholesale operations, syncing products, orders, inventory, and customers.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync"],
  },
  {
    slug: "square",
    category: "Square",
    title: "NetSuite Square Integration",
    description:
      "Built a retail POS integration syncing transactions, items, and customers with automated journal entry creation in NetSuite for accurate financial reporting.",
    tags: ["Transactions Sync", "Items Sync", "JE Creation", "Customer Sync"],
  },
  {
    slug: "joor",
    category: "Joor",
    title: "Joor NetSuite Integration",
    description:
      "Developed a B2B wholesale platform integration handling sales orders, products, UPC codes, and customer data synchronization with NetSuite for a fashion brand.",
    tags: ["Sales Orders", "Products Sync", "UPC Sync", "Customers Sync"],
  },
  {
    slug: "sos-inventory",
    category: "SOS Inventory",
    title: "NetSuite SOS Inventory Integration",
    description:
      "Configured an integration connecting NetSuite with SOS Inventory for stock management, syncing sales orders, products, UPCs, and customer records.",
    tags: ["Sales Orders", "Products Sync", "UPC Sync", "Customers Sync"],
  },
  {
    slug: "stripe",
    category: "Stripe",
    title: "NetSuite Stripe Integration",
    description:
      "Implemented an integration connecting NetSuite with Stripe for automated payment processing and reconciliation.",
    tags: ["Payment Sync", "Customers Sync"],
  },
  {
    slug: "quickbooks",
    category: "QuickBooks",
    title: "NetSuite QuickBooks Integration",
    description:
      "Built an accounting system bridge enabling payment synchronization and consolidated financial reporting between NetSuite and QuickBooks.",
    tags: ["Payment Sync", "Financial Reporting", "Invoice Sync"],
  },
  {
    slug: "salesforce",
    category: "Salesforce",
    title: "NetSuite Salesforce Integration",
    description:
      "Delivered an enterprise CRM-ERP integration for the software industry, syncing opportunities, estimates, and customer data between Salesforce and NetSuite.",
    tags: ["Opportunity Sync", "Estimates Sync", "Customers Sync"],
  },
  {
    slug: "hubspot",
    category: "HubSpot",
    title: "NetSuite HubSpot Integration",
    description:
      "Developed an EdTech industry integration connecting HubSpot marketing and sales data with NetSuite for unified contact, company, and deal management.",
    tags: ["Contacts Sync", "Companies Sync", "Deals Sync"],
  },
  {
    slug: "square-seafood",
    category: "Square",
    title: "NetSuite Square — Seafood Processing",
    description:
      "Delivered a specialized integration for the seafood processing industry, handling transactions, customer data, and inventory synchronization with NetSuite.",
    tags: ["Transactions Sync", "Customer Sync", "Inventory Sync"],
  },
];

export const about = {
  bio: [
    "Senior NetSuite Technical & Functional Consultant with 7+ years of experience delivering enterprise ERP implementations, SuiteScript development, NetSuite administration, and large-scale system integrations across manufacturing, retail, wholesale distribution, logistics, healthcare, and eCommerce industries.",
    "I've successfully delivered 20+ enterprise NetSuite integration and implementation projects connecting ERP with top eCommerce, CRM, marketplace, accounting, POS, and 3PL platforms. I specialize in building scalable automation solutions that reduce manual effort, improve operational efficiency, and deliver measurable business value.",
    "Beyond development, I own functional discovery — gathering requirements, mapping business processes, running fit-gap analysis, and configuring roles, workflows, forms, and reporting so the system reflects how the business actually operates, from Order-to-Cash through Procure-to-Pay.",
  ],
  availability:
    "Based in Karachi, Pakistan. Available for remote consulting, contract work, and full-time opportunities worldwide.",
  stats: [
    { value: "20+", label: "Enterprise Integrations Delivered" },
    { value: "7+", label: "Years of Experience" },
    { value: "15+", label: "Platforms Integrated" },
  ],
};

export const finalCta = {
  title: "Let's work together.",
  body: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Reach out and let's build something great.",
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
    period: "Nov 2025 — Present",
    location: "Remote",
    bullets: [
      "Act as functional point of contact for finance and operations stakeholders, gathering business requirements and translating business policy into NetSuite roles, permissions, and approval workflows.",
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
      "Facilitated client workshops, requirements gathering, fit-gap analysis, technical design documentation, solution demos, and production deployments.",
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
      "Provided functional consulting, gathering requirements from finance and operations stakeholders and configuring workflows, custom forms, and saved searches for Oracle NetSuite ERP.",
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
    title: "NetSuite Functional & Business Process",
    skills: [
      "Requirements Gathering",
      "Fit-Gap Analysis",
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
