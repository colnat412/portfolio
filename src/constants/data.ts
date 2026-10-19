export const RESUME_PATH = "/NguyenTanLoc_SoftwareEngineer.pdf";

export const engineeringProfile = {
  name: "Nguyen Tan Loc",
  alias: "Colnat",
  role: "Software Engineer",
  focus: "Backend & full-stack development",
};

export const experiences = [
  {
    company: "Hanbiro Vietnam Company",
    role: "Software Engineer",
    period: "Aug 2025 - Present",
    description:
      "Developing automotive CRM and business intelligence applications across the UI, API and database layers.",
    contributions: [
      "Dongsung Motors: migrated legacy PHP/AngularJS features to NestJS and React.js, built the Sales New module end to end, and optimized MySQL queries for 100K+ records.",
      "KMG Automotive: maintained the CRM and vehicle sales platform, resolved legacy bugs, and built dashboard statistics with frontend UI and backend APIs.",
      "BI System: implemented workspace and chart interfaces, backend APIs, and dynamic visualization logic for imported datasets using NestJS, React.js and PostgreSQL.",
    ],
  },
  {
    company: "G&BSOFT Company Limited",
    role: "Intern",
    period: "Jan 2025 - Apr 2025",
    description:
      "Contributed to asset management and logistics applications using Next.js, ASP.NET, .NET Framework and MSSQL.",
    contributions: [
      "Improved university asset management workflows with QR code integration and updated user interfaces.",
      "Researched port activity, fuel usage and vessel data for BBC Chartering, and assisted with metadata-related interfaces.",
    ],
  },
];

export const engineeringStack = [
  {
    area: "Backend",
    name: "NestJS / Spring Boot",
    detail:
      "TypeScript, JavaScript and Java for RESTful APIs and application services.",
  },
  {
    area: "Frontend",
    name: "React.js / Next.js",
    detail:
      "Business workflows, dashboard interfaces and full-stack web applications.",
  },
  {
    area: "Data & real-time",
    name: "PostgreSQL / MySQL / Redis",
    detail:
      "Query optimization, data persistence and real-time synchronization.",
  },
  {
    area: "Delivery",
    name: "Docker / Digital Ocean",
    detail:
      "Containerized systems, with GitHub and GitLab for version control.",
  },
];

export const currentContributions = [
  {
    title: "Legacy to maintainable",
    detail:
      "Migrating Dongsung Motors CRM features from PHP and AngularJS to NestJS and React.js.",
  },
  {
    title: "Features from API to UI",
    detail:
      "Building the Sales New module and dashboard statistics across frontend and backend.",
  },
  {
    title: "Queries that keep up",
    detail:
      "Optimizing MySQL queries and backend architecture for datasets with 100K+ records.",
  },
  {
    title: "Data into usable insights",
    detail:
      "Implementing chart interfaces and APIs for BI workspaces and imported datasets.",
  },
];

export const projects = [
  {
    id: 1,
    title: "Trip Plan",
    category: "Fullstack Developer",
    kind: "trip",
    screenshots: [
      {
        src: "/projects/trip-plan/dashboard.png",
        alt: "Trip Plan dashboard for Tri Ton showing the trip budget, spending categories and recent expenses",
        caption: "Trip overview & shared expenses",
        width: 1854,
        height: 932,
      },
      {
        src: "/projects/trip-plan/itinerary.png",
        alt: "Trip Plan itinerary for Tri Ton showing daily activities, locations and estimated costs",
        caption: "Daily itinerary & activity planning",
        width: 1859,
        height: 934,
      },
    ],
    teamSize: 1,
    description:
      "A solo full-stack application for planning trips, managing itineraries and sharing expenses, built around Identity, Core and AI services.",
    technologies: [
      "Next.js",
      "NestJS",
      "Spring Boot",
      "FastAPI",
      "PostgreSQL",
      "Redis",
    ],
    contributions: [
      "Built trip planning, itinerary management and member role-based access across microservices.",
      "Implemented four expense-splitting methods: equal, exact amount, percentage and shares, with balance calculations and settlement suggestions.",
      "Integrated Gemini AI for itinerary generation and receipt extraction, plus Google OAuth, email OTP and JWT authentication with Redis-backed sessions and HttpOnly cookies through a Next.js BFF.",
    ],
    href: "https://tripplaningg.vercel.app",
    linkLabel: "Explore Trip Plan",
    isReverse: true,
  },
  {
    id: 2,
    title: "Chat System",
    category: "Backend Developer",
    kind: "chat",
    teamSize: 2,
    description:
      "Chat and room management APIs with member permissions, multiple storage layers and real-time synchronization across clients.",
    technologies: [
      "NestJS",
      "Socket.IO",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Firebase",
    ],
    contributions: [
      "Developed and maintained APIs for chat and room management across multiple storage layers.",
      "Implemented member management, role-based permissions and room lifecycle actions, including adding, removing and kicking members.",
      "Connected WebSocket communication with Redis Pub/Sub for real-time synchronization across clients.",
    ],
    href: "https://github.com/colnat412/chat-system",
    linkLabel: "View source on GitHub",
    isReverse: false,
  },
];

/** Add real certificates here; fileUrl points to a PDF/image in public/certificates. */
export interface Certificate {
  id: string;
  title: string;
  issuer?: string;
  issuedAt?: string;
  credentialId?: string;
  score?: string;
  note?: string;
  imageUrl?: string;
  fileUrl?: string;
  credentialUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: "java-basic-hackerrank",
    title: "Java (Basic) Certificate",
    issuer: "HackerRank",
    issuedAt: "22 August 2026",
    credentialId: "45cbab72cd56",
    credentialUrl: "https://www.hackerrank.com/certificates/45cbab72cd56",
    imageUrl: "/certificates/java-basic-hackerrank.png",
  },
  {
    id: "toeic-listening-reading",
    title: "TOEIC Listening and Reading",
    issuer: "ETS / IIG Vietnam",
    issuedAt: "31 July 2026",
    score: "680 / 990",
    imageUrl: "/certificates/toeic-redacted.png",
  },
];
