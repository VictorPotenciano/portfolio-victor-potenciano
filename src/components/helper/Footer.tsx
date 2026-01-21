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
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white bg-clip-text">
              Victor Potenciano
            </h3>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <Link
              href="https://www.linkedin.com/in/victor-potenciano-9a29392a4/"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Linkedin className="w-8 h-8 opacity-80 hover:opacity-100" />
            </Link>
            <Link
              href="https://github.com/VictorPotenciano"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Github className="w-8 h-8 opacity-80 hover:opacity-100" />
            </Link>
            <Link
              href="https://wa.me/+34660529420"
              aria-label={t.home.whatsappAlt}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="w-8 h-8 opacity-80 hover:opacity-100"
                style={{ fontSize: "2rem" }}
              />
            </Link>
          </div>
          <p className="text-white">
            Copyright © {new Date().getFullYear()}. {t.footer.rigths}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
