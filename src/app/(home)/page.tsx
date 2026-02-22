import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";
import TechnologiesSection from "@/components/technologies/TechnologiesSection";
import HomeSection from "@/components/home/HomeSection";
import ProjectsSection from "@/components/proyects/ProjectsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Victor Potenciano - Portfolio Desarrollador Web Full Stack",
  description:
    "Portfolio profesional de Victor Potenciano. Desarrollador web especializado en React, Next.js y TypeScript. Explora mis proyectos y habilidades.",
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
  openGraph: {
    title: "Victor Potenciano - Portfolio Desarrollador Web",
    description: "Explora mis proyectos y habilidades como desarrollador web.",
    url: "https://portfolio-victor-potenciano.vercel.app",
    siteName: "Victor Potenciano Portfolio",
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
    description: "Desarrollador web Full Stack",
    images: ["/fotoperfil.jpg"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Victor Potenciano",
    alternateName: "Victor",
    jobTitle: "Desarrollador Web Full Stack",
    url: "https://portfolio-victor-potenciano.vercel.app",
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
    description:
      "Desarrollador web Full Stack especializado en React, Next.js y TypeScript. Portfolio con proyectos reales.",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeSection />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
