export interface Certificate {
  name: string;
  page: string;
  url: string;
}

export interface Degree {
  type: string;
  name: string;
  institution: string;
  period: string;
}

export interface TechnologyItem {
  name: string;
  level: string;
}

export interface TechnologyCategory {
  title: string;
  avatar: string;
  items: TechnologyItem[];
}

export interface Project {
  name: string;
  description1: string;
  description2: string;
  url: string;
  technologies: { name: string; color: string }[];
  code?: string;
}

export interface TranslationKeys {
  navbar: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };
  home: {
    greeting: string;
    name: string;
    titles: string[];
    downloadCv: string;
    contactMe: string;
    linkedinAlt: string;
    githubAlt: string;
    whatsappAlt: string;
  };
  about: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    description3: string;
    certificates: {
      title: string;
      items: Certificate[];
    };
    education: {
      title: string;
      degrees: Degree[];
    };
  };
  technologies: {
    title: string;
    subtitle: string;
    technology: TechnologyCategory[];
  };
  contact: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    name: string;
    email: string;
    message: string;
    send: string;
    messageSend: string;
  };
  projects: {
    title: string;
    subtitle: string;
    techUsed: string;
    projects: Project[];
    button: string;
    code: string;
  };
  footer: {
    rigths: string;
  };
}

export type Languages = "es" | "en";
export type Translations = Record<Languages, TranslationKeys>;
