import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HomeSection from "@/components/HomeSection";
import ProjectsSection from "@/components/proyects/ProjectsSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Victor Potenciano</title>
        <meta
          name="description"
          content="Portafolio de Victor Potenciano, desarrollador web."
        />
        <meta
          name="keywords"
          content="portafolio, desarrollador web, Victor Potenciano"
        />
        <meta name="author" content="Victor Potenciano" />
        <meta property="og:title" content="Portfolio Victor Potenciano" />
        <meta
          property="og:description"
          content="Explora mis proyectos y habilidades como desarrollador web."
        />
        <meta property="og:image" content="/fotoperfil.jpg" />{" "}
        <meta property="og:url" content="https://portfolio-victor-potenciano.vercel.app" />
      </Head>
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
