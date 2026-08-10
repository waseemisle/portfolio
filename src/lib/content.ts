import { basePath } from "./base-path";

export const site = {
  name: "Waseem Akhtar",
  role: "Senior NetSuite Technical & Functional Consultant",
  heroLines: ["I architect the", "NetSuite backbone", "enterprises scale on."],
  tagline:
    "Senior NetSuite Technical & Functional Consultant with 7+ years across the full ERP lifecycle — discovery workshops and BRD/FRD documentation, SuiteScript and SuiteFlow development, and post-go-live hypercare. 20+ enterprise implementations spanning manufacturing, retail, distribution, logistics, healthcare, and eCommerce, connecting NetSuite to the commerce, CRM, marketplace, and financial systems the business actually runs on.",
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
  { label: "Work", href: "/work" },
  { label: "Expertise", href: "/expertise" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const pillars = [
  {
    title: "Create Clarity",
    body: "I turn tangled processes and disconnected systems into clear, documented, business-approved requirements — through discovery workshops, current/future-state process maps, and fit-gap analysis every stakeholder can point to.",
  },
  {
    title: "Drive Efficiency",
    body: "I replace manual data entry and workflow gaps with governed, real-time, bidirectional sync between NetSuite and the rest of your stack — engineered to reduce error, not just move data faster.",
  },
  {
    title: "Deliver Impact",
    body: "I tie every engagement to a business outcome — faster order-to-cash cycles, accurate inventory, a clean financial close — and stay through go-live to prove it in production, not just in a demo.",
  },
];

export const expertiseIntro =
  "I turn fragmented systems and undocumented process into unified, automated, well-governed NetSuite operations — across every industry I've worked in.";

export const expertise = [
  {
    title: "NetSuite Functional Consulting",
    body: "Facilitate discovery workshops and requirements-gathering sessions with finance, operations, and warehouse stakeholders; document BRD/FRD, run fit-gap analysis, and configure roles, permissions, approval workflows, custom forms, saved searches, and SuiteAnalytics dashboards that match business policy — not just system defaults.",
  },
  {
    title: "ERP Implementation & Business Process Design",
    body: "Own Order-to-Cash, Procure-to-Pay, Inventory & Warehouse Management, and Financial Reporting design end-to-end — from current/future-state process mapping through UAT coordination, end-user training, change management, and post-go-live hypercare.",
  },
  {
    title: "eCommerce & Retail",
    body: "Connect NetSuite to Shopify, WooCommerce, Magento, and BigCommerce for fashion, lifestyle, and consumer brands — syncing products, orders, inventory, customers, and pricing in real time, with error handling built to survive peak-traffic days.",
  },
  {
    title: "Manufacturing & Distribution",
    body: "Streamline Order-to-Cash and Procure-to-Pay workflows for manufacturing and distribution clients — managing inventory, warehouse operations, and fulfillment automation at scale.",
  },
  {
    title: "Financial Services",
    body: "Integrate NetSuite with QuickBooks, Stripe, and Square for retail and food-service businesses — automating payment reconciliation, financial reporting, and journal entry creation.",
  },
  {
    title: "Logistics & 3PL",
    body: "Build custom AWS middleware connectors for European 3PL platforms including VOS Logistics, with further integrations across Royal Mail, DPD, and ILG for automated shipment tracking and inventory sync.",
  },
  {
    title: "CRM & Sales",
    body: "Sync NetSuite bi-directionally with Salesforce and HubSpot for enterprise software and education technology companies — managing opportunities, estimates, contacts, and deals.",
  },
  {
    title: "Marketplaces & POS",
    body: "Deliver multi-channel integrations with Amazon, Walmart, eBay, Wayfair, and Square POS — unifying inventory and order management across automotive and specialty food industries.",
  },
];

export const featuredIntegration = {
  eyebrow: "Featured Integration",
  title:
    "A multi-platform eCommerce implementation connecting NetSuite with Shopify and Magento — engineered for real-time sync across every storefront.",
  role: "Functional & Technical Integration Architect",
  description:
    "Ran discovery workshops with merchandising, finance, and fulfillment teams to define requirements, then architected an integration framework handling real-time product sync, order management, inventory updates, and customer data flow across multiple storefronts — cutting manual data entry by 90%.",
  tags: [
    "Requirements Gathering",
    "BRD/FRD",
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
      "Delivered full-cycle integration enabling automated synchronization of sales orders, products, customers, and inventory between NetSuite and Shopify storefronts for a fashion retail brand — eliminating manual order entry entirely.",
    tags: ["Sales Orders Sync", "Products Sync", "Customers Sync", "Inventory Sync"],
  },
  {
    slug: "vos-logistics-aws",
    category: "VOS Logistics · AWS",
    title: "NetSuite 3PL VOS Logistics",
    description:
      "Architected a custom AWS middleware Connector App for European 3PL logistics, handling inventory sync, sales orders, purchase orders, item receipts, and price synchronization across 5 countries in real time.",
    tags: ["Inventory Sync", "Sales Orders", "Purchase Orders", "Item Receipts", "Price Sync"],
  },
  {
    slug: "bigcommerce",
    category: "BigCommerce",
    title: "NetSuite BigCommerce Integration",
    description:
      "Built a comprehensive integration covering product catalog, orders, inventory levels, customer profiles, and dynamic price levels for an industrial supplies distributor, replacing a daily manual export/import process.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync", "Price Levels"],
  },
  {
    slug: "magento2",
    category: "Magento2",
    title: "NetSuite Magento2 Integration",
    description:
      "Delivered an automotive industry integration connecting NetSuite with Magento2 for unified product, order, inventory, and customer management across every sales channel.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync", "Price Levels"],
  },
  {
    slug: "amazon",
    category: "Amazon",
    title: "NetSuite Amazon Integration",
    description:
      "Implemented an automotive industry integration connecting NetSuite with Amazon Marketplace, keeping fulfillment, inventory, and order data in sync without manual reconciliation.",
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
      "Built an integration managing product catalog, orders, inventory, and customer data on Magento for a consumer electronics retailer with high SKU turnover.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync"],
  },
  {
    slug: "shopify-electronics",
    category: "Shopify",
    title: "NetSuite Shopify Integration — Consumer Electronics",
    description:
      "Delivered an integration managing product catalog, orders, inventory, and customer data on Shopify for a consumer electronics retailer, syncing in near real time.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync"],
  },
  {
    slug: "shopify-wholesale-retail",
    category: "Shopify",
    title: "NetSuite Shopify Integration — Wholesale & Retail",
    description:
      "Architected a fashion industry integration connecting NetSuite with Shopify for B2C retail operations, syncing products, orders, inventory, and customers across storefronts.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync"],
  },
  {
    slug: "joor-wholesale-retail",
    category: "Joor",
    title: "NetSuite Joor Integration — Wholesale & Retail",
    description:
      "Delivered a fashion industry integration connecting NetSuite with Joor for B2B wholesale operations, syncing products, orders, inventory, and customers between systems.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync"],
  },
  {
    slug: "square",
    category: "Square",
    title: "NetSuite Square Integration",
    description:
      "Built a retail POS integration syncing transactions, items, and customers with automated journal entry creation in NetSuite, closing the books without manual entry.",
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
      "Configured an integration connecting NetSuite with SOS Inventory for stock management, syncing sales orders, products, UPCs, and customer records across both systems.",
    tags: ["Sales Orders", "Products Sync", "UPC Sync", "Customers Sync"],
  },
  {
    slug: "stripe",
    category: "Stripe",
    title: "NetSuite Stripe Integration",
    description:
      "Implemented an integration connecting NetSuite with Stripe for automated payment processing and reconciliation, closing the gap between payment capture and cash application.",
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
    "Senior NetSuite Technical & Functional Consultant with 7+ years delivering enterprise ERP implementations, SuiteScript development, NetSuite administration, and large-scale system integrations across manufacturing, retail, wholesale distribution, logistics, healthcare, and eCommerce.",
    "I've shipped 20+ enterprise NetSuite integration and implementation projects, connecting ERP with the eCommerce, CRM, marketplace, accounting, POS, and 3PL platforms businesses actually run on — building automation that removes manual effort instead of just moving it around.",
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
  body: "I'm always up for a conversation about NetSuite — a tricky integration, a process that needs re-architecting, or a role where technical depth and functional judgment both matter. Reach out and let's talk.",
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
      "Designed and developed enterprise-grade NetSuite integrations for Shopify, WooCommerce, Magento, BigCommerce, Salesforce, HubSpot, Zendesk, Amazon, Walmart, eBay, Wayfair, and Joor.",
      "Built scalable SuiteScript 2.x solutions: User Events, Client Scripts, Scheduled Scripts, RESTlets, Suitelets, and Map/Reduce scripts.",
      "Engineered REST API integrations between NetSuite and external ERP, CRM, POS, warehouse, logistics, and accounting systems, using Dell Boomi, XML, JSON, GraphQL, and Webhooks.",
      "Developed reusable integration frameworks that cut implementation effort across new customer environments.",
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
      "Supported enterprise integrations between NetSuite, Shopify, Dell Boomi, and third-party logistics providers.",
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
