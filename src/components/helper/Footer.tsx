"use client";

import { useLanguage } from "@/context/LanguajeContext";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import es from "@/translations/es";
import en from "@/translations/en";
import { TranslationKeys } from "../../../typing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const translations: { [key: string]: TranslationKeys } = { es, en };

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <footer className="border-t border-line bg-ink">
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="font-mono text-sm text-muted">
            <span className="text-accent">&lt;</span>
            VP
            <span className="text-accent">/&gt;</span>
            <span className="mx-2 text-line">·</span>
            Copyright © {new Date().getFullYear()}. {t.footer.rigths}
          </span>

          <div className="flex items-center gap-5">
            <Link
              href="https://www.linkedin.com/in/victor-potenciano-9a29392a4/"
              aria-label={t.home.linkedinAlt}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/VictorPotenciano"
              aria-label={t.home.githubAlt}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://wa.me/+34660529420"
              aria-label={t.home.whatsappAlt}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
