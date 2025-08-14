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
      className="fixed right-4 top-4 z-50 bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 cursor-pointer hover:transform hover:scale-150 duration-300 transition-all"
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
