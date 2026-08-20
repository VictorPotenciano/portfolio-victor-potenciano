import { TranslationKeys } from "../../typing";

const technologyColorMap: Record<string, string> = {
  "Next.js": "bg-blue-600",
  "Tailwind CSS": "bg-green-600",
  TypeScript: "bg-yellow-600",
  Laravel: "bg-red-600",
  PHP: "bg-orange-600",
  MySQL: "bg-purple-600",
  Prisma: "bg-pink-600",
  Neon: "bg-indigo-600",
  PostgreSQL: "bg-teal-600",
  "NextAuth.js": "bg-black",
  "Vercel Blob": "bg-gray-600",
  Stripe: "bg-slate-700",
  Vercel: "bg-gray-800",
};

const en: TranslationKeys = {
  navbar: {
    home: "Home",
    about: "About",
    experience: "Technologies",
    projects: "Projects",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  home: {
    greeting: "Hi, I'm",
    name: "Victor Potenciano",
    titles: [
      "Victor Potenciano",
      "Full Stack Developer",
      "Web Solutions Creator",
    ],
    downloadCv: "Download CV",
    contactMe: "Contact Me!",
    linkedinAlt: "Link to LinkedIn",
    githubAlt: "Link to GitHub",
    whatsappAlt: "Link to WhatsApp",
  },
  about: {
    title: "About me?",
    subtitle: "Want to know more",
    description1:
      "I'm a Madrid-based Full Stack developer who builds complete web applications end to end, from the interface down to the database. I trained in Multiplatform Application Development and Web Application Development, and I haven't stopped shipping real projects to keep learning since.",
    description2:
      "I work mainly with React, Next.js and TypeScript on the frontend, and Node, Spring Boot, Laravel and SQL/PostgreSQL databases on the backend, depending on what each project calls for. I care as much about maintainable code as about the person using the app never having to think about how it works underneath: the interface gets the same attention as the architecture behind it.",
    description3:
      "Outside of work I keep building my own projects (the ones you see on this site are just a sample) because that's how I learn new technology fastest. I'm open to new challenges and opportunities, so if you've got a project in mind, let's talk.",
    certificates: {
      title: "Certificates",
      items: [
        {
          name: "Responsive Web Design Certificate",
          page: "freeCodeCamp.org",
          url: "https://www.freecodecamp.org/espanol/certification/victorpotenciano/responsive-web-design",
        },
      ],
    },
    experience: {
      title: "Work Experience",
      jobs: [
        {
          position: "FRONTEND DEVELOPER",
          company: "IMPLEMENTAL SYSTEMS",
          location: "Madrid",
          period: "March 2026 - Present",
          description:
            "Develop the frontend of a GIS system in React, building the map views and geospatial data panels, integrated with a Spring Boot backend and SQL databases.",
        },
        {
          position: "WEB DEVELOPER",
          company: "FUNCIONALIA",
          location: "Arroyomolinos, Madrid",
          period: "November 2024 – June 2025",
          description:
            "Maintained and built WordPress websites for different clients, hand-crafting layouts in HTML and Bootstrap and writing custom PHP functionality whenever plugins fell short of what a project needed. Fixed bugs and shipped performance and UX improvements on sites already in production.",
        },
        {
          position: "INTERN",
          company: "BBVA NEXT TECHNOLOGIES",
          location: "Madrid",
          period: "April 2022 – June 2022",
          description:
            "Built web components with HTML, CSS and JavaScript for internal projects, turning designs into functional, accessible interfaces. Worked closely with the development team on code reviews and continuous UI improvements, my first real taste of working inside a professional team.",
        },
      ],
    },
    education: {
      title: "Education",
      degrees: [
        {
          type: "Higher Education Degree",
          name: "Multiplatform Application Development",
          institution:
            "Universidad Alfonso X el Sabio (Villanueva de la Cañada, Madrid)",
          period: "September 2020 - June 2022",
        },
        {
          type: "Higher Education Degree",
          name: "Web Application Development",
          institution: "U-TAD (Las Rozas de Madrid, Madrid)",
          period: "September 2024 - June 2025",
        },
      ],
    },
  },
  technologies: {
    title: "Technologies",
    subtitle: "Explore my experience in",
    technology: [
      {
        title: "Frontend Development",
        avatar: "layout",
        items: [
          { name: "HTML", level: "Intermediate" },
          { name: "CSS", level: "Intermediate" },
          { name: "Angular", level: "Beginner" },
          { name: "Javascript", level: "Beginner" },
          { name: "TypeScript", level: "Beginner" },
          { name: "NextJs", level: "Intermediate" },
          { name: "React", level: "Beginner" },
          { name: "TailwindCSS", level: "Intermediate" },
          { name: "Bootstrap", level: "Intermediate" },
          { name: "ShadCn", level: "Intermediate" },
        ],
      },
      {
        title: "Backend Development",
        avatar: "server",
        items: [
          { name: "MySql", level: "Intermediate" },
          { name: "PostgreSQL", level: "Beginner" },
          { name: "MongoDB", level: "Beginner" },
          { name: "SpringBoot", level: "Beginner" },
          { name: "Java", level: "Beginner" },
          { name: "Prisma", level: "Intermediate" },
          { name: "Neon", level: "Beginner" },
          { name: "PHP", level: "Beginner" },
          { name: "Laravel", level: "Intermediate" },
        ],
      },
      {
        title: "Tools",
        avatar: "tools",
        items: [
          { name: "VS Code", level: "Intermediate" },
          { name: "Git", level: "Intermediate" },
          { name: "Github", level: "Intermediate" },
          { name: "Figma", level: "Beginner" },
          { name: "Postman", level: "Intermediate" },
          { name: "WordPress", level: "Intermediate" },
          { name: "Vercel", level: "Intermediate" },
          { name: "AWS", level: "Beginner" },
          { name: "Stripe", level: "Beginner" },
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "Discover my",
    techUsed: "Technologies used:",
    projects: [
      {
        name: "My Personal Portfolio",
        description1:
          "Portfolio with its own visual identity, a dark developer-console theme, fluid motion and a working contact form.",
        description2:
          "This is the site you're looking at right now: a dark interface inspired by developer terminals and consoles, with monospace type for the stack and each project's status. It includes an animated intro, a bio, a stack manifest with proficiency levels, a project explorer with a detail view, work experience as a commit-style log, education, and a working contact form. It switches instantly between Spanish and English and adapts to any screen size. Built with Next.js, TypeScript and Tailwind CSS, deployed on Vercel.",
        url: "https://portfolio-victor-potenciano.vercel.app/",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"].map(
          (tech) => ({
            name: tech,
            color: technologyColorMap[tech],
          })
        ),
        code: "https://github.com/VictorPotenciano/portfolio-victor-potenciano",
      },
      {
        name: "FrutasCalix",
        description1:
          "Online fruit and vegetable store with full back-of-house management.",
        description2:
          "The admin panel manages the product and category catalog, configures special offers, and tracks orders and registered users, all in one place.",
        technologies: [
          "Next.js",
          "Tailwind CSS",
          "TypeScript",
          "Prisma",
          "Neon",
          "PostgreSQL",
        ].map((tech) => ({ name: tech, color: technologyColorMap[tech] })),
        inDevelopment: "In Development",
      },
      {
        name: "Ibernova Soluciones",
        description1:
          "Rental platform for a holiday property, with online booking, integrated payments and an owner-facing management panel.",
        description2:
          "An application for managing the rental of a property in Villaviciosa de Odón. Guests check availability, browse an image gallery hosted on Vercel Blob, and book securely with payments handled by Stripe. Access is controlled with NextAuth.js: each guest manages their own bookings from their panel, while the owner has a dashboard to edit property details, review users, and monitor every active booking. Backend on Prisma over PostgreSQL (Neon), interface in Next.js, TypeScript and Tailwind CSS.",
        url: "https://www.ibernovasoluciones.es/",
        technologies: [
          "Next.js",
          "NextAuth.js",
          "Tailwind CSS",
          "TypeScript",
          "Prisma",
          "Neon",
          "PostgreSQL",
          "Stripe",
          "Vercel Blob",
          "Vercel",
        ].map((tech) => ({ name: tech, color: technologyColorMap[tech] })),
        code: "https://github.com/VictorPotenciano/casa-alquiler",
      },
      {
        name: "Digital Wedding Invitation",
        description1:
          "Wedding website with RSVP, a local guide for guests, and an organization panel for the couple.",
        description2:
          "Built for a real wedding held in Toledo. Guests find everything about the event there (schedule, location with an interactive map, bus transport) and RSVP through a form noting allergies or transport needs. It includes local recommendations (accommodation, hair salons, restaurants and places to visit) and a gift section for contributing financially. The couple gets a dashboard that centralizes RSVPs in real time with filters by attendance, transport and dietary restrictions, built to simplify catering and bus logistics. Next.js, Tailwind CSS and Prisma over PostgreSQL (Neon).",
        url: "https://web-boda-zeta.vercel.app/",
        technologies: [
          "Next.js",
          "NextAuth.js",
          "Tailwind CSS",
          "TypeScript",
          "Prisma",
          "Neon",
          "PostgreSQL",
          "Vercel",
        ].map((tech) => ({ name: tech, color: technologyColorMap[tech] })),
        code: "https://github.com/VictorPotenciano/web-boda",
      },
      {
        name: "Jsouto Peluqueros",
        description1:
          "Website for a hair salon with online appointment booking and an integrated blog.",
        description2:
          "Clients pick a service, date and time through a dedicated booking module, and can follow the salon's news on an integrated blog. The admin panel manages appointments, blog posts, available time slots and the service catalog; images are served from Vercel Blob.",
        technologies: [
          "Next.js",
          "NextAuth.js",
          "Tailwind CSS",
          "TypeScript",
          "Prisma",
          "Neon",
          "PostgreSQL",
          "Vercel Blob",
          "Vercel",
        ].map((tech) => ({ name: tech, color: technologyColorMap[tech] })),
        inDevelopment: "In Development",
      },
      {
        name: "Project Manager – ProjectHub",
        description1:
          "Collaborative project manager with tasks, payments, files and real-time notifications.",
        description2:
          "Each project groups tasks assignable to team members, logged payments, comments and attached files; inviting someone new is as simple as adding their user. A real-time notification system flags any relevant change, so nothing slips through. Built with Next.js, TypeScript, Prisma over PostgreSQL (Neon) and NextAuth.js, deployed on Vercel.",
        url: "https://gestor-proyectos-victor.vercel.app/",
        technologies: [
          "Next.js",
          "NextAuth.js",
          "TypeScript",
          "Tailwind CSS",
          "Prisma",
          "Neon",
          "PostgreSQL",
          "Vercel Blob",
          "Vercel",
        ].map((tech) => ({
          name: tech,
          color: technologyColorMap[tech],
        })),
        code: "https://github.com/VictorPotenciano/gestor-proyectos",
      },
      {
        name: "Bar El Rincon",
        description1:
          "Landing page for a fictional bar, with a database-driven menu and online table reservations.",
        description2:
          "A demo project for a bar specializing in mixology. The daily menu and full drinks-and-food list load dynamically from PostgreSQL (Neon) via Prisma, so changing a dish or a drink never touches code. Visitors book a table by picking date, time, party size and notes, and browse an image gallery, recurring events, hours and contact details in a responsive experience with subtle animation, built in Next.js and Tailwind CSS.",
        url: "https://bar-elrincon-app.vercel.app/",
        technologies: [
          "Next.js",
          "Tailwind CSS",
          "TypeScript",
          "Prisma",
          "Neon",
          "PostgreSQL",
          "Vercel",
        ].map((tech) => ({ name: tech, color: technologyColorMap[tech] })),
        code: "https://github.com/VictorPotenciano/bar-app",
      },
      {
        name: "Task Manager",
        description1:
          "Personal task manager with custom categories, status filters and private per-user access.",
        description2:
          "Each user signs in with NextAuth.js and manages their own private space, with full CRUD for both tasks and the categories they define themselves. Filtering by pending, completed or all makes it easy to track progress, and grouping by category adapts the tool to different projects or areas. Prisma over PostgreSQL stores the data; Tailwind CSS handles the responsive design.",
        url: "https://gestor-de-tareas-app.vercel.app/",
        technologies: [
          "Next.js",
          "NextAuth.js",
          "Tailwind CSS",
          "TypeScript",
          "Prisma",
          "Neon",
          "PostgreSQL",
          "Vercel",
        ].map((tech) => ({ name: tech, color: technologyColorMap[tech] })),
        code: "https://github.com/VictorPotenciano/gestor-de-tareas-app",
      },
      {
        name: "DineroVista",
        description1:
          "Personal net worth tracking with multi-currency accounts, real-time quotes and monthly history.",
        description2:
          "Centralizes every account the user holds in a single dashboard: bank accounts, cash, savings, cryptocurrencies and investment assets like stocks or ETFs. Each account carries its own currency and identifying color; for crypto and stocks, a symbol and quantity that are automatically valued with real-time quotes from sources like CoinGecko. Net worth converts to euros and shows up in monthly and yearly evolution charts alongside financial KPIs. A snapshot system, manual or via a monthly cron job, reconstructs net worth history over time. Sign in with Google or email/password through NextAuth.js, with email verification (React Email) and secure password changes. Prisma over PostgreSQL (Neon) on the backend; Next.js, TypeScript and Tailwind CSS in a fully responsive interface.",
        url: "https://dinero-vista.vercel.app/",
        technologies: [
          "Next.js",
          "NextAuth.js",
          "Tailwind CSS",
          "TypeScript",
          "Prisma",
          "Neon",
          "PostgreSQL",
          "Vercel",
        ].map((tech) => ({ name: tech, color: technologyColorMap[tech] })),
        code: "https://github.com/VictorPotenciano/dinero-vista",
      },
    ],
    button: "View Project",
    code: "View Code",
  },
  contact: {
    title: "Contact",
    subtitle: "Let's continue on",
    description1: "Let's talk!",
    description2: "I'm available for new projects and opportunities",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    messageSend: "Message sent!",
  },
  footer: {
    rigths: "All rights reserved.",
  },
};

export default en;
