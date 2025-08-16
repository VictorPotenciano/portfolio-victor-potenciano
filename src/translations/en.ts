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
};

const en: TranslationKeys = {
  navbar: {
    home: "Home",
    about: "About",
    experience: "Technologies",
    projects: "Projects",
    contact: "Contact",
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
  },
  about: {
    title: "About me?",
    subtitle: "Want to know more",
    description1:
      "Passionate Full Stack Developer focused on creating innovative and efficient digital solutions. With experience in HTML, CSS, JavaScript, Angular, Next.js, SpringBoot, Laravel, MySQL and PostgreSQL, I specialize in developing modern and scalable web applications.",
    description2:
      "My approach focuses on combining functional design with an optimized user experience, always looking to learn and apply the latest technologies.",
    description3:
      "Additionally, I have skills in tools like Git, Figma and Postman, and I'm committed to continuously developing my competencies to deliver high-quality projects.",
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
        name: "FrutasCalix",
        description1:
          "A complete web application for fruit and vegetable sales with an integrated administrative management system.",
        description2:
          "Includes advanced features for managing products, categories, special offers, order management, and user management, with a complete control panel for administrators.",
        url: "https://tfg-frontend-victor-potenciano.vercel.app/",
        technologies: [
          "Next.js",
          "Tailwind CSS",
          "TypeScript",
          "Prisma",
          "Neon",
          "PostgreSQL",
        ].map((tech) => ({ name: tech, color: technologyColorMap[tech] })),
      },
      {
        name: "Bar El Rincon",
        description1: "A modern and responsive landing page for a bar.",
        description2:
          "Includes sections such as menu, gallery, menu, events, reservations, and contact, with animations and a attractive design to promote the establishment and attract customers. Simple but effective project.",
        url: "https://bar-elrincon-app.vercel.app/",
        technologies: [
          "Next.js",
          "Tailwind CSS",
          "TypeScript",
          "Prisma",
          "Neon",
          "PostgreSQL",
        ].map((tech) => ({ name: tech, color: technologyColorMap[tech] })),
        code: "https://github.com/VictorPotenciano/bar-app",
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
    rigths: "Copyright © 2025. All rights reserved.",
  },
};

export default en;
