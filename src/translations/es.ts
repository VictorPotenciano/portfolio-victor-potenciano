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

const es: TranslationKeys = {
  navbar: {
    home: "Inicio",
    about: "Sobre Mí",
    experience: "Tecnologias",
    projects: "Proyectos",
    contact: "Contacto",
  },
  home: {
    greeting: "Hola, Soy",
    name: "Victor Potenciano",
    titles: [
      "Victor Potenciano",
      "Desarrollador Full Stack",
      "Creador de Soluciones Web",
    ],
    downloadCv: "Descargar CV",
    contactMe: "¡Contáctame!",
    linkedinAlt: "Enlace a LinkedIn",
    githubAlt: "Enlace a GitHub",
  },
  about: {
    title: "Sobre mí?",
    subtitle: "¿Quieres saber más",
    description1:
      "Desarrollador Full Stack apasionado por crear soluciones digitales innovadoras y eficientes. Con experiencia en HTML, CSS, JavaScript, Angular, Next.js, SpringBoot, Laravel, MySQL y PostgreSQL, me especializo en el desarrollo de aplicaciones web modernas y escalables.",
    description2:
      "Mi enfoque se centra en combinar un diseño funcional con una experiencia de usuario optimizada, siempre buscando aprender y aplicar las últimas tecnologías.",
    description3:
      "Además, tengo habilidades en herramientas como Git, Figma y Postman, y estoy comprometido con el desarrollo continuo de mis competencias para ofrecer proyectos de alta calidad.",
    certificates: {
      title: "Certificados",
      items: [
        {
          name: "Certificado Diseño Web Responsivo",
          page: "freeCodeCamp.org",
          url: "https://www.freecodecamp.org/espanol/certification/victorpotenciano/responsive-web-design",
        },
      ],
    },
    education: {
      title: "Educación",
      degrees: [
        {
          type: "Grado Superior",
          name: "Desarrollo de Aplicaciones Multiplataforma",
          institution:
            "Universidad Alfonso X el Sabio (Villanueva de la Cañada, Madrid)",
          period: "Septiembre 2020 - Junio 2022",
        },
        {
          type: "Grado Superior",
          name: "Desarrollo de Aplicaciones Web",
          institution: "U-TAD (Las Rozas de Madrid, Madrid)",
          period: "Septiembre 2024 - Junio 2025",
        },
      ],
    },
  },
  technologies: {
    title: "Tecnologías",
    subtitle: "Explora mi experiencia en",
    technology: [
      {
        title: "Desarrollo Frontend",
        avatar: "layout",
        items: [
          { name: "HTML", level: "Intermedio" },
          { name: "CSS", level: "Intermedio" },
          { name: "Angular", level: "Básico" },
          { name: "Javascript", level: "Básico" },
          { name: "TypeScript", level: "Básico" },
          { name: "NextJs", level: "Intermedio" },
          { name: "React", level: "Básico" },
          { name: "TailwindCSS", level: "Intermedio" },
          { name: "Bootstrap", level: "Intermedio" },
          { name: "ShadCn", level: "Intermedio" },
        ],
      },
      {
        title: "Desarrollo Backend",
        avatar: "server",
        items: [
          { name: "MySql", level: "Intermedio" },
          { name: "PostgreSQL", level: "Básico" },
          { name: "MongoDB", level: "Básico" },
          { name: "SpringBoot", level: "Básico" },
          { name: "Java", level: "Básico" },
          { name: "Prisma", level: "Básico" },
          { name: "Neon", level: "Básico" },
          { name: "PHP", level: "Básico" },
          { name: "Laravel", level: "Intermedio" },
        ],
      },
      {
        title: "Herramientas",
        avatar: "tools",
        items: [
          { name: "VS Code", level: "Intermedio" },
          { name: "Git", level: "Intermedio" },
          { name: "Github", level: "Intermedio" },
          { name: "Figma", level: "Básico" },
          { name: "Postman", level: "Intermedio" },
          { name: "WordPress", level: "Intermedio" },
          { name: "Vercel", level: "Intermedio" },
          { name: "AWS", level: "Básico" },
        ],
      },
    ],
  },
  projects: {
    title: "Proyectos",
    subtitle: "Descubre mis",
    techUsed: "Tecnologías utilizadas:",
    projects: [
      {
        name: "FrutasCalix",
        description1:
          "Una aplicación web completa para la venta de frutas y verduras con un sistema de gestión administrativa integral.",
        description2:
          "Incluye funcionalidades avanzadas para administrar productos, categorías, ofertas especiales, gestión de pedidos y usuarios, con un panel de control completo para administradores.",
        url: "https://tfg-frontend-victor-potenciano.vercel.app/",
        technologies: [
          "Next.js",
          "Tailwind CSS",
          "TypeScript",
          "Laravel",
          "PHP",
          "MySQL",
        ].map((tech) => ({ name: tech, color: technologyColorMap[tech] })),
      },
      {
        name: "Bar El Rincon",
        description1: "Es una landing page moderna y responsive para un bar.",
        description2:
          "Incluye secciones como menú, galería, carta, eventos, reservas y contacto, con animaciones y un diseño atractivo para promocionar el establecimiento y atraer clientes. Proyecto sencillo pero efectivo.",
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
    button: "Ver Proyecto",
    code: "Ver Código",
  },
  contact: {
    title: "Contacto",
    subtitle: "Sigamos en",
    description1: "¡Hablemos!",
    description2: "Estoy disponible para nuevos proyectos y oportunidades",
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    send: "Enviar Mensaje",
    messageSend: "Mensaje enviado!",
  },
  footer: {
    rigths: "Copyright © 2025. Todos los derechos reservados.",
  },
};

export default es;
