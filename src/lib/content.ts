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
  system: string;
  industry: string;
  region?: string;
  role: string;
  summary: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "shopify-apparel",
    system: "NetSuite × Shopify",
    industry: "Fashion & Apparel eCommerce",
    role: "Integration Developer",
    summary:
      "Built a bi-directional NetSuite–Shopify integration keeping product catalog, orders, inventory, and customer records in sync across channels.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync"],
  },
  {
    slug: "3pl-middleware",
    system: "NetSuite × 3PL Logistics Middleware (AWS)",
    industry: "Logistics & 3PL",
    region: "Europe",
    role: "Middleware Architect",
    summary:
      "Designed an AWS-hosted connector app bridging NetSuite with a third-party logistics provider, orchestrating inventory and order data at scale.",
    tags: [
      "Inventory Sync",
      "Sales Orders Sync",
      "Purchase Order Sync",
      "Item Receipt Sync",
      "Price Sync",
    ],
  },
  {
    slug: "bigcommerce-consumer",
    system: "NetSuite × BigCommerce",
    industry: "Consumer Goods Retail",
    role: "Integration Developer",
    summary:
      "Delivered a full-catalog BigCommerce integration automating product, order, inventory, and pricing sync for a growing DTC brand.",
    tags: [
      "Product Sync",
      "Orders Sync",
      "Inventory Sync",
      "Customer Sync",
      "Price Levels Sync",
    ],
  },
  {
    slug: "magento-amazon-automotive",
    system: "NetSuite × Magento 2 & Amazon",
    industry: "Automotive",
    role: "Integration Developer",
    summary:
      "Unified a two-channel automotive parts business on NetSuite, syncing catalog, orders, inventory, and pricing across Magento and Amazon Marketplace.",
    tags: [
      "Product Sync",
      "Orders Sync",
      "Inventory Sync",
      "Customer Sync",
      "Price Levels Sync",
    ],
  },
  {
    slug: "woocommerce-lifestyle",
    system: "NetSuite × WooCommerce",
    industry: "Premium Design & Lifestyle",
    role: "Integration Developer",
    summary:
      "Connected a WooCommerce storefront to NetSuite, automating order, inventory, customer, and payment reconciliation.",
    tags: [
      "Product Sync",
      "Orders Sync",
      "Inventory Sync",
      "Customer Sync",
      "Payments Sync",
    ],
  },
  {
    slug: "magento-shopify-electronics",
    system: "NetSuite × Magento & Shopify",
    industry: "Consumer Electronics Retail",
    role: "Integration Developer",
    summary:
      "Ran a dual-channel Magento and Shopify integration, keeping fulfillment, inventory, and customer data consistent across both storefronts.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync"],
  },
  {
    slug: "shopify-joor-fashion",
    system: "NetSuite × Shopify & Joor",
    industry: "Apparel Wholesale & Retail",
    role: "Integration Developer",
    summary:
      "Combined DTC and wholesale channels on one NetSuite instance, syncing Shopify retail data alongside Joor B2B wholesale orders.",
    tags: ["Product Sync", "Orders Sync", "Inventory Sync", "Customer Sync"],
  },
  {
    slug: "square-fnb",
    system: "NetSuite × Square (POS)",
    industry: "Food & Beverage Retail",
    role: "Integration Developer",
    summary:
      "Automated daily POS reconciliation, syncing Square transactions and items into NetSuite with journal entry creation for finance.",
    tags: ["Transactions Sync", "Items Sync", "JE Creation"],
  },
  {
    slug: "joor-fashion-wholesale",
    system: "NetSuite × Joor",
    industry: "Fashion Wholesale",
    role: "Integration Developer",
    summary:
      "Built a wholesale order pipeline syncing Joor sales orders, products, UPCs, and customer records into NetSuite.",
    tags: ["Sales Orders Sync", "Products Sync", "UPC Sync", "Customers Sync"],
  },
  {
    slug: "sos-stripe-wholesale",
    system: "NetSuite × SOS Inventory & Stripe",
    industry: "Wholesale Distribution",
    role: "Integration Developer",
    summary:
      "Integrated NetSuite with SOS Inventory and Stripe, syncing orders, products, UPCs, and customer payment data.",
    tags: ["Sales Orders Sync", "Products Sync", "UPC Sync", "Customers Sync"],
  },
  {
    slug: "quickbooks-print",
    system: "NetSuite × QuickBooks",
    industry: "Print & Promotional Products",
    role: "NetSuite Administrator",
    summary:
      "Built an accounting bridge between NetSuite and QuickBooks for invoice sync, payment reconciliation, and financial reporting.",
    tags: ["Payment Sync", "Financial Reporting"],
  },
  {
    slug: "shopify-safety",
    system: "NetSuite × Shopify",
    industry: "Industrial Safety Equipment",
    role: "Integration Developer",
    summary:
      "Delivered a focused Shopify integration for an industrial safety retailer, automating order, product, and customer sync.",
    tags: ["Sales Orders Sync", "Products Sync", "Customers Sync"],
  },
  {
    slug: "salesforce-enterprise",
    system: "NetSuite × Salesforce",
    industry: "Enterprise Software",
    role: "Integration Developer",
    summary:
      "Connected NetSuite with Salesforce to sync opportunities, estimates, and customer records across sales and finance teams.",
    tags: ["Opportunity Sync", "Estimates Sync", "Customers Sync"],
  },
  {
    slug: "hubspot-edtech",
    system: "NetSuite × HubSpot",
    industry: "Education & EdTech",
    role: "Integration Developer",
    summary:
      "Linked marketing and finance by syncing HubSpot contacts, companies, and deals into NetSuite for a training and education provider.",
    tags: ["Contacts Sync", "Companies Sync", "Deals Sync"],
  },
  {
    slug: "square-seafood",
    system: "NetSuite × Square (POS)",
    industry: "Seafood & Fish Processing",
    role: "Integration Developer",
    summary:
      "Rolled out a POS-to-ERP integration for a seafood processor, syncing transactions, customers, and inventory into NetSuite.",
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
