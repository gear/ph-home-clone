"use client";

import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/libs/utils";
import { useMemo } from "react";

export const LanguageToggle = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const labels = useMemo(() => {
    if (currentLanguage === "en")
      return {
        en: "EN",
        jp: "JP",
      };
    else if (currentLanguage === "ja")
      return {
        en: "英語",
        jp: "日本語",
      };
  }, [currentLanguage]);

  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => changeLanguage("en")}
        className={cn(
          "px-2 py-1 rounded transition-colors",
          currentLanguage === "en"
            ? "bg-blue-500 text-white"
            : "text-gray-600 hover:bg-gray-100"
        )}
      >
        {labels?.en}
      </button>
      <button
        onClick={() => changeLanguage("ja")}
        className={cn(
          "px-2 py-1 rounded transition-colors",
          currentLanguage === "ja"
            ? "bg-blue-500 text-white"
            : "text-gray-600 hover:bg-gray-100"
        )}
      >
        {labels?.jp}
      </button>
    </div>
  );
};

export default LanguageToggle;
