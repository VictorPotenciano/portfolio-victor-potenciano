"use client";

import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Typewriter } from "nextjs-simple-typewriter";
import es from "@/translations/es";
import en from "@/translations/en";
import { useLanguage } from "@/context/LanguajeContext";
import { TranslationKeys } from "../../../typing";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef } from "react";

const translations: { [key: string]: TranslationKeys } = { es, en };

// Variantes para animaciones
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.18,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Tilt 3D de la foto de perfil hacia el puntero (transitions-dev card tilt).
// El puntero se rastrea sobre el wrapper plano .t-tilt para que los bordes
// de la tarjeta al rotar no se escapen por debajo del cursor.
const useTiltCard = () => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tilt = tiltRef.current;
    const card = tilt?.querySelector<HTMLElement>(".t-tilt-card");
    if (!tilt || !card) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const MAX_TILT_DEG = 10;

    const reset = () => {
      tilt.classList.remove("is-hover");
      card.classList.remove("is-tilting");
      card.style.setProperty("--tilt-rx", "0deg");
      card.style.setProperty("--tilt-ry", "0deg");
    };

    const track = (e: PointerEvent) => {
      if (reduce.matches) return;
      const r = tilt.getBoundingClientRect();
      const px = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
      const py = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
      tilt.classList.add("is-hover");
      card.classList.add("is-tilting");
      card.style.setProperty("--tilt-ry", ((px - 0.5) * MAX_TILT_DEG).toFixed(2) + "deg");
      card.style.setProperty("--tilt-rx", ((0.5 - py) * MAX_TILT_DEG).toFixed(2) + "deg");
      card.style.setProperty("--tilt-gx", (px * 100).toFixed(1) + "%");
      card.style.setProperty("--tilt-gy", (py * 100).toFixed(1) + "%");
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") {
        try {
          tilt.setPointerCapture(e.pointerId);
        } catch {
          // el puntero puede haberse liberado ya; no es crítico
        }
      }
    };

    const onPointerLeave = (e: PointerEvent) => {
      if (e.pointerType === "mouse") reset();
    };

    tilt.addEventListener("pointerdown", onPointerDown);
    tilt.addEventListener("pointermove", track);
    tilt.addEventListener("pointerup", reset);
    tilt.addEventListener("pointercancel", reset);
    tilt.addEventListener("pointerleave", onPointerLeave);

    return () => {
      tilt.removeEventListener("pointerdown", onPointerDown);
      tilt.removeEventListener("pointermove", track);
      tilt.removeEventListener("pointerup", reset);
      tilt.removeEventListener("pointercancel", reset);
      tilt.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return tiltRef;
};

const HomeSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const shouldReduceMotion = useReducedMotion();
  const tiltRef = useTiltCard();

  const handleDownload = () => {
    const pdfUrl = "/Curriculum-Victor-Potenciano.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Curriculum-Victor-Potenciano.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 min-h-screen flex items-center overflow-hidden"
      aria-label="Inicio - Victor Potenciano"
    >
      {/* Fondo: rejilla + brillo ambiental */}
      <div className="absolute inset-0 grid-texture [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />
      <div
        aria-hidden="true"
        className={`absolute -top-24 right-[-10%] w-[36rem] h-[36rem] rounded-full bg-accent/10 blur-[120px] ${
          shouldReduceMotion ? "" : "animate-drift"
        }`}
      />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Texto */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.p
              variants={itemVariants}
              className="font-mono text-sm sm:text-base text-accent mb-4"
            >
              <span className="text-muted">victor@portfolio</span>
              <span className="text-foreground">:~$</span> {t.home.greeting.toLowerCase()}
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"
            >
              {t.home.name}
            </motion.h1>

            <motion.div
              variants={itemVariants}
              aria-hidden="true"
              className="font-mono text-lg sm:text-xl lg:text-2xl text-muted mt-4 min-h-[2em]"
            >
              <span className="text-accent">&gt;</span>{" "}
              <Typewriter
                words={t.home.titles}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={110}
                deleteSpeed={90}
                delaySpeed={1400}
              />
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-10"
              variants={itemVariants}
            >
              <Button
                asChild
                onClick={handleDownload}
                className="bg-accent text-accent-foreground px-8 py-6 rounded-md font-semibold hover:bg-accent/90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-accent/10 cursor-pointer"
              >
                <span>{t.home.downloadCv}</span>
              </Button>
              <Link href="/#contact">
                <Button
                  variant="outline"
                  className="w-full bg-transparent text-foreground border border-line px-8 py-6 rounded-md font-semibold hover:border-accent/60 hover:text-accent hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  {t.home.contactMe}
                </Button>
              </Link>
            </motion.div>

            {/* Iconos */}
            <motion.div
              className="flex justify-center lg:justify-start gap-6 mt-10"
              variants={itemVariants}
            >
              <Link
                href="https://www.linkedin.com/in/victor-potenciano-9a29392a4/"
                aria-label={t.home.linkedinAlt}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-300"
              >
                <motion.span
                  className="block"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-7 h-7" />
                </motion.span>
              </Link>

              <Link
                href="https://github.com/VictorPotenciano"
                aria-label={t.home.githubAlt}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-300"
              >
                <motion.span
                  className="block"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-7 h-7" />
                </motion.span>
              </Link>

              <Link
                href="https://wa.me/+34660529420"
                aria-label={t.home.whatsappAlt}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-300"
              >
                <motion.span
                  className="block"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="w-7 h-7"
                    style={{ fontSize: "1.75rem" }}
                  />
                </motion.span>
              </Link>
            </motion.div>
          </div>

          {/* Foto */}
          <motion.div
            variants={itemVariants}
            ref={tiltRef}
            className="order-1 lg:order-2 flex justify-center lg:justify-end t-tilt"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 t-tilt-card">
              <div className="absolute -inset-3 border border-line rounded-2xl" />
              <span className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl-lg" />
              <span className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-lg" />
              <Image
                src="/fotoperfil.jpg"
                alt="Victor Potenciano - Desarrollador Web Full Stack"
                priority
                width={320}
                height={320}
                className="relative w-full h-full rounded-xl object-cover grayscale-[15%] shadow-2xl"
              />
              <div className="t-tilt-glare rounded-xl" aria-hidden="true" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
