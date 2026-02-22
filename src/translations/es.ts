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
    whatsappAlt: "Enlace a WhatsApp",
  },
  about: {
    title: "Sobre mí?",
    subtitle: "¿Quieres saber más",
    description1:
      "Desarrollador Full Stack especializado en la creación de soluciones digitales robustas y escalables. Enfocado en arquitecturas modernas tanto en frontend como en backend para el desarrollo de aplicaciones web de alto rendimiento.",
    description2:
      "Mi enfoque profesional integra diseño de sistemas eficientes con interfaces intuitivas, priorizando la calidad del código y la experiencia del usuario final. Orientado a la implementación de mejores prácticas y metodologías ágiles de desarrollo.",
    description3:
      "Comprometido con la actualización constante en tecnologías emergentes y la excelencia técnica en cada proyecto. Capacidad demostrada para trabajar en entornos colaborativos y entregar soluciones de alto impacto.",
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
    experience: {
      title: "Experiencia Laboral",
      jobs: [
        {
          position: "EMPLEADO EN PRÁCTICAS",
          company: "BBVA NEXT TECHNOLOGIES",
          location: "Madrid",
          period: "Abril 2022 – Junio 2022",
          description:
            "Desarrollo de componentes web utilizando HTML, CSS y Javascript en proyectos internos. Colaboración con el equipo para implementar mejoras en la interfaz de usuario.",
        },
        {
          position: "DESARROLLADOR WEB",
          company: "FUNCIONALIA",
          location: "Arroyomolinos, Madrid",
          period: "Noviembre 2024 – Marzo 2025",
          description:
            "Mantenimiento y desarrollo de páginas web en WordPress, HTML, Bootstrap y PHP.",
        },
        {
          position: "EMPLEADO EN PRÁCTICAS",
          company: "FUNCIONALIA",
          location: "Arroyomolinos, Madrid",
          period: "Marzo 2025 – Junio 2025",
          description:
            "Mantenimiento y desarrollo de páginas web en WordPress, HTML, Bootstrap y PHP.",
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
          { name: "Prisma", level: "Intermedio" },
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
          { name: "Stripe", level: "Básico" },
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
        name: "Mi Portfolio Personal",
        description1:
          "Portfolio web profesional con diseño moderno, secciones interactivas y sistema de contacto integrado.",
        description2:
          "Portfolio personal desarrollado para mostrar mi trayectoria profesional, habilidades técnicas y proyectos realizados. La aplicación cuenta con una interfaz moderna y completamente responsive, organizada en secciones diferenciadas: presentación con animaciones de texto dinámico, biografía profesional, listado completo de tecnologías con niveles de dominio categorizados por Frontend, Backend y Herramientas, galería de proyectos con tarjetas interactivas que muestran información detallada en modales, sección de educación y certificaciones, y formulario de contacto funcional. La web implementa un sistema de traducción instantaneo de español e ingles, navegación suave entre secciones con scroll animado, y efectos visuales que mejoran la experiencia de usuario. Los proyectos se presentan con tecnologías utilizadas etiquetadas con códigos de color personalizados, enlaces directos a demos en vivo y repositorios de GitHub. Incluye funcionalidad de descarga de CV y enlaces a perfiles profesionales. El portfolio está construido con Next.js y TypeScript, estilizado con Tailwind CSS para garantizar un diseño coherente y profesional que refleja mis capacidades como desarrollador full-stack.",
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
          "Una aplicación web completa para la venta de frutas y verduras con un sistema de gestión administrativa integral.",
        description2:
          "Incluye funcionalidades avanzadas para administrar productos, categorías, ofertas especiales, gestión de pedidos y usuarios, con un panel de control completo para administradores.",
        technologies: [
          "Next.js",
          "Tailwind CSS",
          "TypeScript",
          "Laravel",
          "PHP",
          "MySQL",
        ].map((tech) => ({ name: tech, color: technologyColorMap[tech] })),
        inDevelopment: "En Desarrollo",
      },
      {
        name: "Ibernova Soluciones",
        description1:
          "Plataforma completa de alquiler de una propiedad con sistema de reservas, pagos integrados y panel administrativo.",
        description2:
          "Aplicación web completa para la gestión de alquiler de una propiedad en Villaviciosa de Odón. La plataforma permite a los usuarios explorar la casa con una galería de imágenes alojadas en Vercel Blob, consultar disponibilidad y realizar reservas de forma segura mediante integración con Stripe para procesamiento de pagos. El sistema incluye autenticación de usuarios implementada con NextAuth.js, permitiendo registro e inicio de sesión. Los usuarios pueden gestionar sus reservas desde su panel personal, mientras que el administrador cuenta con un dashboard completo para controlar la información de la propiedad, gestionar usuarios registrados y supervisar todas las reservas activas. La aplicación está construida con Next.js y TypeScript, garantizando un código robusto y mantenible. El diseño responsive se logra mediante Tailwind CSS, mientras que la base de datos PostgreSQL (hosteada en Neon) se gestiona a través de Prisma ORM.",
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
        name: "Invitación de Boda Digital",
        description1:
          "Sitio web elegante para boda con confirmación de asistencia, recomendaciones turísticas y panel administrativo con filtros avanzados.",
        description2:
          "Aplicación web completa diseñada para una boda. El sitio ofrece una experiencia visual romántica y elegante donde los invitados pueden acceder a toda la información necesaria del evento: horarios detallados de la ceremonia y celebración, ubicación exacta con mapa interactivo, información sobre el servicio de transporte (autobuses) para los invitados, y un formulario de confirmación de asistencia. Incluye una sección completa de recomendaciones con hoteles y alojamientos cercanos, peluquerías y salones de belleza para preparación, restaurantes destacados de la zona, y guía turística con lugares imprescindibles que visitar en Toledo. La aplicación también cuenta con una sección de regalo donde los invitados pueden contribuir económicamente de manera sencilla. Incorpora un dashboard administrativo completo para los novios, donde pueden visualizar en tiempo real todas las confirmaciones de asistencia con filtros personalizados: invitados que confirman asistencia, quienes necesitan transporte, personas con alergias o restricciones alimentarias, y estado de las respuestas. Este panel permite una gestión eficiente de la logística del evento y facilita la planificación del catering y transporte. El diseño responsive está optimizado para dispositivos móviles, con una estética cuidada que combina fotografías de la pareja, elementos decorativos románticos y una navegación intuitiva por las diferentes secciones.",
        url: "https://web-boda-zeta.vercel.app/",
        technologies: [
          "Next.js",
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
          "Sitio web completo para una peluquería con información detallada y sistema de reserva de citas.",
        description2:
          "Cuenta con páginas informativas sobre la peluquería, un módulo de reserva donde el cliente ingresa sus datos, selecciona servicios, fecha y hora. Además, incluye un blog y un panel administrativo para gestionar reservas, entradas del blog, horarios disponibles y servicios ofrecidos. Utiliza Vercel Blob para la gestión de imágenes.",
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
        inDevelopment: "En Desarrollo",
      },
      {
        name: "Gestor de Proyectos – ProjectHub",
        description1: "Aplicación web para la gestión de proyectos.",
        description2:
          "Gestor de proyectos desarrollado con Next.js y TypeScript. La aplicación ofrece una solución completa para organizar, rastrear y administrar proyectos de forma eficiente. Permite crear proyectos, generar y asignar tareas a miembros del proyecto, registrar pagos, añadir comentarios al proyecto, adjuntar archivos, e invitar y agregar miembros al equipo. Cada usuario tiene control total sobre los proyectos que son suyos o en los que participa como miembro. Además, cuenta con un sistema de notificaciones en tiempo real que avisa de cualquier modificación, actualización o actividad importante en los proyectos. Presenta un diseño limpio y profesional gracias a Tailwind CSS, y está optimizado para un despliegue rápido en Vercel.",
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
        name: "Bar El Rincón",
        description1:
          "Landing page completa para un bar ficticio con menú dinámico, sistema de reservas y gestión de eventos.",
        description2:
          "Proyecto de demostración que simula el sitio web completo de un bar especializado en mixología y gastronomía. La aplicación incluye una landing page moderna con múltiples secciones: presentación del negocio, menú diario configurable desde base de datos, carta completa de bebidas y platos, galería de imágenes, información de eventos recurrentes y sistema de reservas funcional. El formulario de reservas permite seleccionar fecha, hora, número de comensales y añadir comentarios. La aplicación utiliza Prisma con PostgreSQL (Neon) para gestionar el contenido dinámico del menú y las reservas. El diseño responsive implementado con Tailwind CSS ofrece una navegación fluida y animaciones sutiles que mejoran la experiencia de usuario. Incluye todas las secciones típicas de un sitio web comercial: horarios, información de contacto, ubicación y enlaces a redes sociales, demostrando capacidades full-stack en el desarrollo de aplicaciones web para negocios.",
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
        name: "Gestor de Tareas",
        description1:
          "Aplicación web de gestión de tareas con autenticación de usuarios, filtros avanzados y organización por categorías personalizables.",
        description2:
          "Sistema completo de gestión de tareas con autenticación segura mediante NextAuth.js. Los usuarios pueden registrarse e iniciar sesión para acceder a su espacio personal donde administrar sus tareas de forma privada. La aplicación ofrece funcionalidad CRUD completa tanto para tareas como para categorías personalizadas, permitiendo crear, editar, eliminar y visualizar elementos según las necesidades del usuario. Incluye un sistema de filtros que permite visualizar todas las tareas, solo las pendientes o únicamente las completadas, facilitando la organización y seguimiento del progreso. Las tareas pueden agruparse por categorías definidas por el usuario, proporcionando una estructura flexible y adaptable a diferentes tipos de proyectos o áreas de trabajo. La base de datos PostgreSQL gestionada con Prisma almacena de forma segura toda la información de usuarios, tareas y categorías. El diseño responsive implementado con Tailwind CSS garantiza una experiencia óptima tanto en dispositivos móviles como en escritorio, haciendo que la gestión de tareas sea accesible desde cualquier lugar.",
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
    rigths: "Todos los derechos reservados.",
  },
};

export default es;
