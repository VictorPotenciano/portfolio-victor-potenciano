import dynamic from "next/dynamic";
import HomeSection from "@/components/home/HomeSection";
import { Metadata } from "next";

// Bajo el pliegue: se separan en chunks propios para reducir el JS que
// bloquea el hilo principal en la carga inicial (TBT). Siguen renderizadas
// en el servidor (ssr: true por defecto), solo cambia el bundling.
const AboutSection = dynamic(() => import("@/components/about/AboutSection"));
const TechnologiesSection = dynamic(
  () => import("@/components/technologies/TechnologiesSection")
);
const ProjectsSection = dynamic(
  () => import("@/components/proyects/ProjectsSection")
);
const ContactSection = dynamic(
  () => import("@/components/contact/ContactSection")
);

export const metadata: Metadata = {
  title: "Victor Potenciano - Portfolio Desarrollador Web Full Stack",
  description:
    "Portfolio de Victor Potenciano, desarrollador web Full Stack afincado en Madrid. Especializado en React, Next.js y TypeScript. Descubre mis proyectos y habilidades.",
  keywords: [
    "Victor Potenciano",
    "Victor desarrollador web",
    "portfolio Victor",
    "portfolio programador",
    "portfolio desarrollador web",
    "portfolio full stack",
    "desarrollador web Madrid",
    "programador freelance",
    "desarrollador React",
    "desarrollador Next.js",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Victor Potenciano" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Victor Potenciano - Portfolio Desarrollador Web",
    description:
      "Explora mis proyectos y habilidades como desarrollador web full stack en Madrid.",
    url: "https://portfolio-victor-potenciano.vercel.app",
    siteName: "Victor Potenciano",
    images: [
      {
        url: "/fotoperfil.jpg",
        width: 1200,
        height: 630,
        alt: "Victor Potenciano",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Potenciano - Portfolio",
    description: "Desarrollador web Full Stack en Madrid",
    images: ["/fotoperfil.jpg"],
  },
};

export default function Home() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://portfolio-victor-potenciano.vercel.app/#website",
    name: "Victor Potenciano",
    alternateName: ["Victor Potenciano Portfolio", "Portfolio Victor Potenciano"],
    url: "https://portfolio-victor-potenciano.vercel.app",
    inLanguage: "es-ES",
    publisher: { "@id": "https://portfolio-victor-potenciano.vercel.app/#person" },
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://portfolio-victor-potenciano.vercel.app/#person",
    name: "Victor Potenciano",
    alternateName: "Victor",
    jobTitle: "Desarrollador Web Full Stack",
    url: "https://portfolio-victor-potenciano.vercel.app",
    image: "https://portfolio-victor-potenciano.vercel.app/fotoperfil.jpg",
    sameAs: [
      "https://github.com/VictorPotenciano",
      "https://www.linkedin.com/in/victor-potenciano-9a29392a4/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Full Stack",
      "Desarrollo Web",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madrid",
      addressCountry: "ES",
    },
    description:
      "Desarrollador web Full Stack especializado en React, Next.js y TypeScript. Portfolio con proyectos reales.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <HomeSection />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
