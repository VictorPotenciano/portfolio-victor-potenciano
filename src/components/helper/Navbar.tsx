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

const navLinks = [
  { href: "#home", key: "home" as const },
  { href: "#about", key: "about" as const },
  { href: "#experience", key: "experience" as const },
  { href: "#projects", key: "projects" as const },
  { href: "#contact", key: "contact" as const },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-line"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <span className="font-mono text-lg lg:text-xl font-medium text-foreground">
            <span className="text-accent">&lt;</span>
            VP
            <span className="text-accent">/&gt;</span>
          </span>
        </Link>

        {/* Navegación desktop */}
        <nav className="hidden lg:flex items-center gap-10 font-mono text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="relative text-muted hover:text-foreground transition-colors duration-300 group lowercase"
            >
              <span className="text-accent">~/</span>
              {t.navbar[link.key]}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Botón de menú móvil */}
        <div className="flex items-center gap-4 lg:gap-3">
          <div className="order-2 lg:order-1">
            <TranslateButton />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground hover:bg-surface hover:text-accent transition-colors duration-300"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? t.navbar.closeMenu : t.navbar.openMenu}
            aria-expanded={isMobileMenuOpen}
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
          className={`lg:hidden bg-ink border-t border-line ${
            isMenuVisible ? "animate-menu-slide-in" : "animate-menu-slide-out"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-4 font-mono">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-foreground hover:text-accent px-3 py-2 rounded-md text-base transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                <span className="text-accent">~/</span>
                {t.navbar[link.key]}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
