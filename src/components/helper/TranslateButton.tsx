"use client";

import { useLanguage } from "@/context/LanguajeContext";
import { Button } from "../ui/button";
import { ES, GB } from "country-flag-icons/react/3x2";

const TranslateButton = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="static z-50 bg-surface border border-line rounded-full p-2 hover:border-accent/60 hover:bg-surface-hover cursor-pointer hover:scale-110 duration-300 transition-all"
      aria-label="Toggle language"
    >
      {language === "es" ? (
        <GB title="English" className="w-6 h-6 animate-icon-in" />
      ) : (
        <ES title="Español" className="w-6 h-6 animate-icon-out" />
      )}
    </Button>
  );
};

export default TranslateButton;
