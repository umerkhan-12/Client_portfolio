// Single source of truth for the site's content.
// Everything here comes from Uneeb's CV (Uneeb_Ahmed_New_SCA.pdf).
// Edit this file to update the website — no component changes needed.

export const profile = {
  name: 'Uneeb Ahmed',
  title: 'Supply Chain Analyst',
  location: 'Missouri, USA',
  email: 'uneebahm@gmail.com',
  phone: '+1 470 841 3016',
  phoneHref: 'tel:+14708413016',
  linkedin: 'https://www.linkedin.com/in/uneeb-ahmed',
  resume: '/resume.pdf',
  resumeFileName: 'Uneeb-Ahmed-CV.pdf',
  yearsExperience: '7+',

  // Hero background. Replace with a photo of Uneeb (e.g. /images/uneeb.jpg) any time.
  heroImage: '/images/hero-port.jpg',
  heroImageAlt: 'Container port with gantry cranes at dusk',

  // Big headline on the home page
  headline: 'Building supply chains that deliver on time, in full',

  // Bullet lines under the hero (like a title card)
  roles: [
    { text: 'Supply Chain Analyst, ', link: { label: 'PepsiCo', href: '/experience' } },
    { text: 'M.S. in Business Analytics Management, ', link: { label: 'Avila University', href: '/skills#education' } },
    { text: '7+ years in demand planning, logistics analytics and inventory optimization' },
  ],

  about:
    'I help supply chain teams turn sales, inventory and shipment data into better decisions. Across CPG, infrastructure and global distribution, I have worked on S&OP and demand forecasting, freight cost optimization, warehouse operations, vendor management and international logistics compliance — using SAP MM/SD, SAP IBP/APO, SQL, Python and Power BI to improve service levels, reduce transportation costs and optimize inventory performance across US and global markets.',

  biography: [
    'Uneeb Ahmed is a Supply Chain Analyst at PepsiCo in Missouri, where the work centers on replenishment planning and regional distribution performance. Uneeb analyzes more than 50 million sales, inventory and shipment records, tracks OTIF, fill rate and inventory KPIs — improving product availability by 8–12% — supports S&OP through demand forecasting and production planning, and automated KPI reporting workflows that cut manual reporting effort by 40%.',
    'Before PepsiCo, Uneeb was Supply Chain & Logistics Manager for the infrastructure supply chain at Digital Ocean in Karachi, overseeing procurement, inventory planning, warehouse coordination and supplier management. There, SAP-based demand forecasting accuracy improved by 15%, logistics costs fell by 12% and inventory accuracy held at 99%. Earlier roles include Logistics Specialist at Signalytics, Senior Assistant Manager for Global Supply Chain Analytics at Novatex Limited, International Logistics Analyst at Leverify LLC and Assistant Logistics & Finance Analyst at Orient Overseas Container Line (OOCL), where the career began in 2018.',
    'Uneeb holds an M.S. in Business Analytics Management from Avila University in Kansas City and an MBA in Logistics & Supply Chain Management from the Institute of Business Management in Karachi, and has completed the Harvard ManageMentor Program certificate of skills competence.',
  ],

  pages: {
    experience: {
      title: 'Experience',
      intro:
        'Seven-plus years across CPG, infrastructure and global distribution — from freight costing at a global container line to supply chain analytics at PepsiCo. Each role below lists the results and responsibilities from my CV.',
    },
    skills: {
      title: 'Skills & Education',
      intro:
        'The planning, logistics and data skills I use day to day, the systems behind them, and the education and certifications that support them.',
    },
    projects: {
      title: 'Projects',
      intro:
        'Beyond day-to-day analytics, I work on initiatives that make supply chains more sustainable and better run. Here is a recent project, followed by the areas where I add the most value.',
    },
  },
};

// Headline results (shown on the home page, like an awards list)
export const keyResults = [
  { text: 'Analyzed 50M+ sales, inventory and shipment records to improve replenishment planning', org: 'PepsiCo', when: '2025–present' },
  { text: 'Improved product availability by 8–12% by tracking OTIF, fill rate and inventory KPIs', org: 'PepsiCo', when: '2025–present' },
  { text: 'Reduced manual reporting effort by 40% by automating KPI reporting workflows', org: 'PepsiCo', when: '2025–present' },
  { text: 'Improved SAP-based demand forecasting accuracy by 15%', org: 'Digital Ocean', when: '2023–2024' },
  { text: 'Reduced logistics costs by 12% through freight and carrier analysis', org: 'Digital Ocean', when: '2023–2024' },
  { text: 'Maintained 99% inventory accuracy across logistics operations', org: 'Digital Ocean', when: '2023–2024' },
  { text: 'Improved forecast adherence by 10% across business units', org: 'Novatex Limited', when: '2022–2023' },
  { text: 'Improved reporting efficiency by 30% and reduced excess inventory by 8%', org: 'Novatex Limited', when: '2022–2023' },
  { text: 'Reduced international shipment costs by 10% through carrier and routing analysis', org: 'Leverify LLC', when: '2021–2022' },
];

export const companies = ['PepsiCo', 'Digital Ocean', 'Novatex', 'Leverify', 'OOCL', 'Signalytics'];

export const experience = [
  {
    company: 'PepsiCo',
    role: 'Supply Chain Analyst',
    location: 'Missouri, USA',
    start: 'Aug 2025',
    end: 'Present',
    current: true,
    tags: ['50M+ records analyzed', '+8–12% product availability', '−40% manual reporting'],
    highlights: [
      'Analyzed 50M+ sales, inventory and shipment records to improve replenishment planning and regional distribution performance.',
      'Tracked OTIF, fill rate and inventory KPIs, improving product availability by 8–12% across distribution operations.',
      'Support S&OP activities through demand forecasting, supply analysis and production planning aligned with operational requirements.',
      'Maintain SQL and Python reporting models for logistics monitoring, forecast tracking and inventory performance analysis.',
      'Automated KPI reporting workflows, reducing manual reporting effort by 40% and improving operational reporting consistency.',
      'Developed Power BI and Tableau dashboards to monitor transportation metrics, inventory trends and warehouse performance.',
    ],
  },
  {
    company: 'Digital Ocean',
    role: 'Supply Chain & Logistics Manager',
    team: 'Infrastructure Supply Chain',
    location: 'Karachi, Pakistan',
    start: 'Mar 2023',
    end: 'Sep 2024',
    tags: ['+15% forecast accuracy', '−12% logistics costs', '99% inventory accuracy'],
    highlights: [
      'Oversaw procurement, inventory planning, warehouse coordination and supplier management across multiple operational locations.',
      'Improved SAP-based demand forecasting accuracy by 15%, reducing excess inventory and supporting replenishment planning.',
      'Analyzed inventory movement, lead times and supply constraints to improve operational responsiveness and planning efficiency.',
      'Maintained SAP inventory records and warehouse reporting, ensuring 99% inventory accuracy across logistics operations.',
      'Evaluated freight expenses, carrier utilization and transportation performance, reducing logistics costs by 12%.',
      'Coordinated with procurement and finance teams to support vendor reporting, supply planning and operational risk analysis.',
    ],
  },
  {
    company: 'Signalytics',
    role: 'Logistics Specialist',
    start: 'Dec 2022',
    end: 'Apr 2023',
    tags: [],
    highlights: [
      'Managed shipment scheduling, carrier communication and logistics tracking for domestic and international deliveries.',
      'Maintained shipment documentation, inventory updates and transportation records to improve reporting accuracy and visibility.',
      'Monitored delivery timelines and logistics activities, resolving shipment delays and supporting SLA compliance.',
      'Coordinated freight and warehouse communication across daily logistics and distribution operations.',
      'Analyzed shipment data and transportation reports to support inventory movement tracking and logistics planning.',
      'Launched carrier coordination and operational reporting processes to improve shipment execution and service reliability.',
    ],
  },
  {
    company: 'Novatex Limited',
    role: 'Senior Assistant Manager',
    team: 'Global Supply Chain Analytics',
    location: 'Karachi, Pakistan',
    start: 'Jul 2022',
    end: 'Feb 2023',
    tags: ['+10% forecast adherence', '+30% reporting efficiency', '−8% excess inventory'],
    highlights: [
      'Supported global supply planning by aligning procurement, inventory and demand forecasts across regional operations.',
      'Managed S&OP reporting and forecast tracking, improving forecast adherence by 10% across business units.',
      'Expanded logistics and inventory KPI reporting to strengthen operational visibility and performance monitoring.',
      'Improved reporting efficiency by 30% through analytics solutions for warehouse and logistics reporting.',
      'Analyzed warehouse utilization and inventory movement data, reducing excess inventory levels by 8%.',
      'Supported third-party logistics reporting and shipment visibility initiatives across international distribution.',
    ],
  },
  {
    company: 'Leverify LLC',
    division: 'Dispatch & Logistics',
    role: 'International Logistics Analyst',
    location: 'Islamabad, Pakistan',
    start: 'Dec 2021',
    end: 'Jun 2022',
    tags: ['−10% shipment costs'],
    highlights: [
      'Reviewed international freight expenses and transportation reports, reducing shipment costs by 10% through carrier and routing analysis.',
      'Assessed carrier performance, transit times and routing options to improve shipment reliability and delivery efficiency.',
      'Coordinated import shipments with global vendors while ensuring compliance with shipping documentation requirements.',
      'Verified HS codes and tariff classifications supporting international trade compliance and customs processing.',
      'Investigated shipment discrepancies and delivery claims to improve logistics execution and customer service.',
      'Prepared logistics reports and shipment documentation supporting inventory movement tracking and transportation operations.',
    ],
  },
  {
    company: 'Orient Overseas Container Line (OOCL)',
    role: 'Assistant Logistics & Finance Analyst',
    team: 'Financial Controls',
    location: 'Karachi, Pakistan',
    start: 'Mar 2018',
    end: 'Nov 2021',
    tags: [],
    highlights: [
      'Supported shipment costing, freight analysis and logistics budgeting across regional transportation operations.',
      'Analyzed logistics and financial data against operational targets to support reporting accuracy and performance evaluation.',
      'Assisted with shipment tracking, logistics reporting and operational coordination across daily supply chain workflows.',
      'Maintained shipment records and logistics documentation connecting finance, operations and external stakeholders.',
      'Reviewed transportation workflows and logistics processes to identify improvements in operational efficiency.',
      'Supported freight reconciliation, shipment validation and reporting for international logistics and shipping operations.',
    ],
  },
];

export const skillGroups = [
  {
    id: 'planning',
    title: 'Supply Chain & Planning Analytics',
    items: [
      'Demand & Supply Planning', 'S&OP', 'Inventory Control', 'Inventory Optimization', 'Inventory Forecasting',
      'Safety Stock Planning', 'Production & Distribution Planning', 'Forecast Accuracy', 'Demand Forecasting',
      'Capacity Planning', 'Network Optimization', 'Procurement Analytics', 'Supply Chain Optimization',
      'Predictive Analytics', 'Scenario Planning', 'Supply Chain KPIs',
    ],
  },
  {
    id: 'logistics',
    title: 'Logistics & Cost Analytics',
    items: [
      'Transportation & Freight Cost Analysis', 'Vendor & Carrier Performance', 'SLA Monitoring', 'Transit Time Analysis',
      'Route Optimization', 'Landed Cost Optimization', 'Cost-to-Serve Analysis', 'Warehouse & Distribution Analytics',
      'Import-Export Compliance', 'HS Code & Tariff Compliance', 'International Logistics', 'Shipment Tracking',
      'Freight Operations', 'Root Cause Analysis',
    ],
  },
  {
    id: 'reporting',
    title: 'Data Governance & Reporting',
    items: [
      'KPI Reporting', 'Variance Analysis', 'Data Validation', 'Reporting Automation', 'Executive Dashboards',
      'Forecast & Inventory Reporting', 'Operational Analytics', 'Business Intelligence', 'Data Visualization',
      'Power BI', 'Tableau', 'SQL & Python Analytics', 'Performance Monitoring', 'Data Quality Assurance',
    ],
  },
  {
    id: 'technical',
    title: 'Technical Skills',
    items: [
      'SAP MM/SD', 'SAP IBP/APO', 'ERP Systems', 'TMS', 'SQL', 'Python', 'Pandas', 'NumPy', 'Scikit-Learn',
      'Power BI', 'Tableau', 'Snowflake', 'SQL Server', 'Advanced Excel', 'Pivot Tables', 'VBA',
      'Forecasting Tools', 'Data Modeling', 'ETL Workflows',
    ],
  },
  {
    id: 'strengths',
    title: 'Professional Strengths',
    items: [
      'Cross-functional Collaboration', 'Stakeholder Management', 'Project Management', 'Process Improvement',
      'Lean Six Sigma', 'Kaizen', 'Problem Solving', 'Continuous Improvement', 'Strategic Planning',
      'Agile Environment', 'Operational Excellence',
    ],
  },
];

export const education = [
  { degree: 'M.S. in Business Analytics Management', school: 'Avila University', location: 'Kansas City, MO' },
  { degree: 'MBA in Logistics & Supply Chain Management', school: 'Institute of Business Management', location: 'Karachi, Pakistan' },
];

export const certifications = [
  { name: 'Certificate of Skills Competence', issuer: 'Harvard ManageMentor Program' },
  { name: 'Anti-Bribery & Fraud Professional Certificate', issuer: 'Compliance & Ethics Training' },
  { name: 'Certificate in Professional Soft Skills', issuer: 'Morgen Consultancy' },
];

export const projects = [
  {
    title: 'Sustainable Supply Chain & Environmental Initiative',
    summary:
      'A cross-departmental initiative to bring “Reduce, Recycle, Reuse” thinking into everyday logistics and supply chain processes.',
    points: [
      'Organized a one-day workshop with the Sustainable Living Society on “Reduce, Recycle, Reuse,” supporting logistics sustainability and CSR objectives.',
      'Brought together cross-departmental teams to incorporate sustainable practices into supply chain processes.',
      'Evaluated logistics workflows and recommended environmentally responsible process improvements.',
    ],
  },
];

// "Areas of focus" on the Projects page — each grounded in results from the CV.
export const focusAreas = [
  {
    title: 'Demand Planning & S&OP',
    text:
      'Forecasting and S&OP that keep supply aligned with demand. At PepsiCo I support S&OP through demand forecasting, supply analysis and production planning; at Digital Ocean SAP-based forecast accuracy improved by 15%, and at Novatex forecast adherence rose by 10% across business units.',
  },
  {
    title: 'Logistics & Freight Cost',
    text:
      'Carrier, routing and freight analysis that lowers cost without hurting service. Freight and carrier analysis cut logistics costs by 12% at Digital Ocean and international shipment costs by 10% at Leverify, alongside HS code, tariff and customs compliance work.',
  },
  {
    title: 'Inventory & Reporting Automation',
    text:
      'Inventory visibility and KPI reporting people can trust. Highlights include 99% inventory accuracy at Digital Ocean, 8% less excess inventory and 30% more efficient reporting at Novatex, and 40% less manual reporting effort at PepsiCo through automated KPI workflows.',
  },
];

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills & Education', href: '/skills' },
  { label: 'Projects', href: '/projects' },
];
