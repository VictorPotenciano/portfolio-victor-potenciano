"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import TranslateButton from "./TranslateButton";
import { useLanguage } from "@/context/LanguajeContext";
import { TranslationKeys } from "../../../typing";
import es from "@/translations/es";
import en from "@/translations/en";

const translations: { [key: string]: TranslationKeys } = { es, en };

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const { language } = useLanguage();
  const t = translations[language];

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
      setIsMenuVisible(true);
    } else {
      setIsMenuVisible(false);
    }
  };

  const closeMobileMenu = () => {
    setIsMenuVisible(false);
  };

  useEffect(() => {
    if (!isMenuVisible) {
      const timer = setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isMenuVisible]);

  const text = "Victor Potenciano";
  const letters = text.split("").map((letter, index) => (
    <span
      key={index}
      className="inline-block transition-all duration-300 group-hover:animate-wave-letter"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));

  return (
    <header className="bg-white shadow-lg fixed top-0 w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent transition-all duration-700 ease-in-out group-hover:bg-gradient-to-l group-hover:from-indigo-600 group-hover:via-blue-600 group-hover:to-purple-600 group-hover:scale-125 group-hover:animate-pulse">
            {letters}
          </div>
        </Link>

        {/* Navegación desktop */}
        <nav className="hidden lg:flex space-x-12">
          <Link
            href="#home"
            className="text-lg font-medium text-blue-800 hover:text-purple-600 transition-colors duration-300 relative group"
          >
            {t.navbar.home}
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#about"
            className="text-lg font-medium text-blue-800 hover:text-purple-600 transition-colors duration-300 relative group"
          >
            {t.navbar.about}
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#experience"
            className="text-lg font-medium text-blue-800 hover:text-purple-600 transition-colors duration-300 relative group"
          >
            {t.navbar.experience}
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#projects"
            className="text-lg font-medium text-blue-800 hover:text-purple-600 transition-colors duration-300 relative group"
          >
            {t.navbar.projects}
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium text-blue-800 hover:text-purple-600 transition-colors duration-300 relative group"
          >
            {t.navbar.contact}
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Botón de menú móvil */}
        <div className="flex items-center gap-6 lg:gap-4">
          <div className="order-2 lg:order-1">
            <TranslateButton />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-blue-800 hover:bg-purple-100 hover:text-purple-600 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 animate-icon-out" />
            ) : (
              <Menu className="w-6 h-6 animate-icon-in" />
            )}
          </Button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <nav
          className={`lg:hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 shadow-lg ${
            isMenuVisible ? "animate-menu-slide-in" : "animate-menu-slide-out"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-4">
            <Link
              href="#home"
              className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              {t.navbar.home}
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              {t.navbar.about}
            </Link>
            <Link
              href="#experience"
              className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              {t.navbar.experience}
            </Link>
            <Link
              href="#projects"
              className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              {t.navbar.projects}
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              {t.navbar.contact}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
