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
      "Full Stack Developer specialized in creating robust and scalable digital solutions. Focused on modern architectures for both frontend and backend to develop high-performance web applications.",
    description2:
      "My professional approach integrates efficient system design with intuitive interfaces, prioritizing code quality and end-user experience. Oriented towards implementing best practices and agile development methodologies.",
    description3:
      "Committed to continuous learning of emerging technologies and technical excellence in every project. Proven ability to work in collaborative environments and deliver high-impact solutions.",
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
          position: "INTERN",
          company: "BBVA NEXT TECHNOLOGIES",
          location: "Madrid",
          period: "April 2022 – June 2022",
          description:
            "Development of web components using HTML, CSS and Javascript in internal projects. Collaboration with the team to implement user interface improvements.",
        },
        {
          position: "WEB DEVELOPER",
          company: "FUNCIONALIA",
          location: "Arroyomolinos, Madrid",
          period: "November 2024 – March 2025",
          description:
            "Maintenance and development of websites using WordPress, HTML, Bootstrap and PHP.",
        },
        {
          position: "INTERN",
          company: "FUNCIONALIA",
          location: "Arroyomolinos, Madrid",
          period: "March 2025 – June 2025",
          description:
            "Maintenance and development of websites using WordPress, HTML, Bootstrap and PHP.",
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
        name: "Personal Portfolio",
        description1:
          "Professional web portfolio with modern design, interactive sections and integrated contact system.",
        description2:
          "This personal portfolio showcases my professional experience, technical skills, and completed projects. The application features a modern, fully responsive interface organized into clearly defined sections: a presentation with dynamic text animations, a professional biography, a comprehensive list of technologies with proficiency levels categorized by Frontend, Backend, and Tools, a project gallery with interactive cards displaying detailed information in modals, an education and certifications section, and a functional contact form. The design implements a light/dark theme system, smooth navigation between sections with animated scrolling, and visual effects that enhance the user experience. Projects are presented with the technologies used, labeled with custom color codes, and include direct links to live demos and GitHub repositories. It also includes functionality for downloading my CV and links to my professional profiles. The portfolio is built with Next.js and TypeScript, styled with Tailwind CSS to ensure a consistent and professional design that reflects my capabilities as a full-stack developer.",
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
          "A complete web application for fruit and vegetable sales with an integrated administrative management system.",
        description2:
          "Includes advanced features for managing products, categories, special offers, order management, and user management, with a complete control panel for administrators.",
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
          "Complete property rental platform with booking system, integrated payments and administrative panel.",
        description2:
          "A complete web application for managing a rental property in Villaviciosa de Odón. The platform allows users to explore the property with an image gallery hosted on Vercel Blob, check availability, and securely make bookings through Stripe integration for payment processing. The system includes user authentication implemented with NextAuth.js, enabling registration and login. Users can manage their bookings from their personal panel, while the administrator has a comprehensive dashboard to control property information, manage registered users, and monitor all active bookings. The application is built with Next.js and TypeScript, ensuring robust and maintainable code. Responsive design is achieved using Tailwind CSS, while the PostgreSQL database (hosted on Neon) is managed through Prisma ORM.",
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
      },
      {
        name: "Digital Wedding Invitation",
        description1:
          "Elegant wedding website with RSVP, tourist recommendations, and an administrative panel with advanced filters.",
        description2:
          "A complete web application designed for weddings. The site offers a romantic and elegant visual experience where guests can access all the necessary information about the event: detailed ceremony and reception times, the exact location with an interactive map, information about transportation (buses) for guests, and an RSVP form. It includes a comprehensive recommendations section with nearby hotels and accommodations, hair and beauty salons for getting ready, top restaurants in the area, and a tourist guide with must-see places to visit in Toledo. The application also features a gift section where guests can easily contribute financially. It incorporates a complete administrative dashboard for the couple, where they can view all RSVPs in real time with custom filters: guests who RSVP, those who need transportation, people with allergies or dietary restrictions, and the status of responses. This panel allows for efficient management of event logistics and facilitates catering and transportation planning. The responsive design is optimized for mobile devices, with a carefully crafted aesthetic that combines photos of the couple, romantic decorative elements, and intuitive navigation through the different sections.",
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
          "Complete website for a hair salon with detailed information and appointment booking system.",
        description2:
          "It features informational pages about the hair salon, a booking module where clients enter their details, select services, date, and time. It also includes a blog and an administrative panel for managing bookings, blog posts, available times, and services offered. It uses Vercel Blob for image management.",
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
        name: "Bar El Rincon",
        description1:
          "Complete landing page for a fictional bar with dynamic menu, reservation system and event management.",
        description2:
          "This demo project simulates a complete website for a bar specializing in mixology and gastronomy. The application includes a modern landing page with multiple sections: a business introduction, a daily menu configurable from a database, a full menu of drinks and dishes, an image gallery, information on recurring events, and a functional reservation system. The reservation form allows users to select the date, time, number of guests, and add comments. The application uses Prisma with PostgreSQL (Neon) to manage the dynamic menu content and reservations. The responsive design, implemented with Tailwind CSS, offers smooth navigation and subtle animations that enhance the user experience. It includes all the typical sections of a business website: opening hours, contact information, location, and social media links, demonstrating full-stack capabilities in web application development for businesses.",
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
          "Web application for task management with user authentication, advanced filters, and customizable category organization.",
        description2:
          "A complete task management system with secure authentication via NextAuth.js. Users can register and log in to access their personal workspace to manage their tasks privately. The application offers full CRUD functionality for both tasks and custom categories, allowing users to create, edit, delete, and view items according to their needs. It includes a filtering system that allows users to view all tasks, only pending tasks, or only completed tasks, facilitating organization and progress tracking. Tasks can be grouped into user-defined categories, providing a flexible structure adaptable to different types of projects or work areas. The PostgreSQL database, managed with Prisma, securely stores all user, task, and category information. The responsive design, implemented with Tailwind CSS, ensures an optimal experience on both mobile and desktop devices, making task management accessible from anywhere.",
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
