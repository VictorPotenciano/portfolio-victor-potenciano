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
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
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
      "Soy desarrollador Full Stack afincado en Madrid, especializado en construir aplicaciones web completas de principio a fin: desde la interfaz hasta la base de datos. Me formé en Desarrollo de Aplicaciones Multiplataforma y Desarrollo de Aplicaciones Web, y desde entonces no he dejado de construir proyectos reales para seguir aprendiendo.",
    description2:
      "Trabajo principalmente con React, Next.js y TypeScript en el frontend, y con Node, Spring Boot, Laravel y bases de datos SQL/PostgreSQL en el backend, según lo que pida cada proyecto. Me importa tanto que el código sea mantenible como que quien usa la aplicación no tenga que pensar en cómo funciona por dentro: cuido el detalle de la interfaz igual que la arquitectura que hay debajo.",
    description3:
      "Fuera del trabajo sigo levantando proyectos propios (los que ves en esta web son solo una muestra) porque es la forma en la que mejor aprendo tecnologías nuevas. Estoy abierto a nuevos retos y oportunidades, así que si tienes un proyecto entre manos, hablemos.",
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
          position: "DESARROLLADOR FRONTEND",
          company: "IMPLEMENTAL SYSTEMS",
          location: "Madrid",
          period: "Marzo 2026 - Actualidad",
          description:
            "Desarrollo el frontend de un sistema GIS con React, construyendo las vistas de mapa y los paneles de datos geoespaciales, integrado con un backend en Spring Boot y bases de datos SQL.",
        },
        {
          position: "DESARROLLADOR WEB",
          company: "FUNCIONALIA",
          location: "Arroyomolinos, Madrid",
          period: "Noviembre 2024 – Junio 2025",
          description:
            "Mantuve y desarrollé sitios web sobre WordPress para distintos clientes, maquetando a medida en HTML y Bootstrap y desarrollando funcionalidades específicas en PHP cuando los plugins no cubrían lo que pedía cada proyecto. Resolví incidencias y apliqué mejoras de rendimiento y de experiencia de usuario sobre webs ya en producción.",
        },
        {
          position: "EMPLEADO EN PRÁCTICAS",
          company: "BBVA NEXT TECHNOLOGIES",
          location: "Madrid",
          period: "Abril 2022 – Junio 2022",
          description:
            "Desarrollé componentes web con HTML, CSS y JavaScript para proyectos internos, traduciendo diseños en interfaces funcionales y accesibles. Colaboré estrechamente con el equipo de desarrollo en revisiones de código y en la mejora continua de la interfaz de usuario, mi primer contacto real con el trabajo en equipo dentro de un entorno profesional.",
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
          "Portfolio con identidad visual propia, tema oscuro tipo consola de desarrollo, animaciones fluidas y formulario de contacto funcional.",
        description2:
          "Es la web que estás viendo ahora: una interfaz oscura inspirada en terminales y consolas de desarrollo, con tipografía monoespaciada para el stack y el estado de cada proyecto. Incluye presentación animada, biografía, un manifiesto de tecnologías con nivel de dominio, un explorador de proyectos con vista de detalle, experiencia laboral en formato de historial de commits, educación y un formulario de contacto funcional. Cambia de español a inglés al instante y se adapta a cualquier tamaño de pantalla. Construida con Next.js, TypeScript y Tailwind CSS, y desplegada en Vercel.",
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
          "Tienda online de frutas y verduras con gestión administrativa completa detrás del mostrador.",
        description2:
          "El panel de administración permite gestionar el catálogo de productos y categorías, configurar ofertas especiales, y hacer seguimiento de pedidos y usuarios registrados desde un único lugar.",
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
          "Plataforma de alquiler para una propiedad vacacional, con reservas online, pagos integrados y panel de gestión para el propietario.",
        description2:
          "Aplicación para gestionar el alquiler de una vivienda en Villaviciosa de Odón. Los huéspedes consultan la disponibilidad, recorren una galería de imágenes alojada en Vercel Blob y reservan de forma segura con pagos gestionados por Stripe. El acceso se controla con NextAuth.js: cada usuario administra sus propias reservas desde su panel, mientras que el propietario dispone de un dashboard para editar la información de la propiedad, revisar usuarios y supervisar todas las reservas activas. Backend en Prisma sobre PostgreSQL (Neon), interfaz en Next.js, TypeScript y Tailwind CSS.",
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
        name: "Invitación de Boda Digital",
        description1:
          "Web de boda con confirmación de asistencia, guía de la zona para los invitados y panel de organización para los novios.",
        description2:
          "Diseñada para una boda real celebrada en Toledo. Los invitados encuentran ahí toda la información del evento (horarios, ubicación con mapa interactivo, transporte en autobús) y confirman su asistencia desde un formulario, indicando alergias o necesidad de transporte. Incluye recomendaciones de la zona (alojamiento, peluquerías, restaurantes y lugares que visitar) y una sección de regalo para contribuir económicamente. Los novios cuentan con un dashboard que centraliza las confirmaciones en tiempo real con filtros por asistencia, transporte y restricciones alimentarias, pensado para simplificar la logística de catering y buses. Next.js, Tailwind CSS y Prisma sobre PostgreSQL (Neon).",
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
          "Web para una peluquería con reserva de citas online y blog integrado.",
        description2:
          "El cliente elige servicio, fecha y hora desde un módulo de reservas propio, y puede seguir las novedades del salón en un blog integrado. Desde el panel administrativo se gestionan citas, entradas del blog, horarios disponibles y el catálogo de servicios; las imágenes se sirven desde Vercel Blob.",
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
        description1:
          "Gestor de proyectos colaborativo con tareas, pagos, archivos y notificaciones en tiempo real.",
        description2:
          "Cada proyecto agrupa tareas asignables a miembros del equipo, pagos registrados, comentarios y archivos adjuntos; invitar a alguien nuevo es tan simple como añadir su usuario. Un sistema de notificaciones en tiempo real avisa de cualquier cambio relevante, así que nadie se pierde una actualización. Construido con Next.js, TypeScript, Prisma sobre PostgreSQL (Neon) y NextAuth.js, con despliegue en Vercel.",
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
          "Landing page para un bar ficticio, con menú gestionado desde base de datos y reservas de mesa online.",
        description2:
          "Proyecto de demostración para un bar especializado en mixología. El menú diario y la carta completa se cargan dinámicamente desde PostgreSQL (Neon) vía Prisma, así que cambiar un plato o una bebida no requiere tocar código. Los visitantes reservan mesa indicando fecha, hora, número de comensales y comentarios, y navegan por galería de imágenes, eventos recurrentes, horarios y contacto en una experiencia responsive con animaciones sutiles construida en Next.js y Tailwind CSS.",
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
          "Gestor de tareas personal con categorías propias, filtros de estado y acceso privado por usuario.",
        description2:
          "Cada usuario accede a su espacio privado tras autenticarse con NextAuth.js y gestiona sus tareas con operaciones CRUD completas, tanto para las tareas como para las categorías que él mismo define. Los filtros por pendientes, completadas o todas facilitan seguir el progreso, y agrupar por categoría permite adaptar la herramienta a distintos proyectos o áreas. Prisma sobre PostgreSQL guarda los datos; Tailwind CSS resuelve el diseño responsive.",
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
          "Seguimiento de patrimonio personal con cuentas multidivisa, cotizaciones en tiempo real e histórico mensual.",
        description2:
          "Centraliza en un único panel todas las cuentas del usuario: bancos, efectivo, ahorro, criptomonedas y activos de inversión como acciones o ETFs. Cada cuenta lleva su propia divisa y color identificativo; en cripto y bolsa, un símbolo y una cantidad que se valoran automáticamente con cotizaciones en tiempo real de fuentes como CoinGecko. El patrimonio neto se convierte a euros y se visualiza en gráficas de evolución mensual y anual junto a KPIs del estado financiero. Un sistema de snapshots, manuales o vía cron mensual, reconstruye el histórico de patrimonio a lo largo del tiempo. Login con Google o email y contraseña vía NextAuth.js, con verificación por correo (React Email) y cambio seguro de contraseña. Prisma sobre PostgreSQL (Neon) en el backend; Next.js, TypeScript y Tailwind CSS en una interfaz totalmente responsive.",
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
