import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-full border border-slate-200">
      {["en", "bn"].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1 rounded-full text-[10px] font-black uppercase transition-all duration-300 ${
            lang === l 
            ? "bg-white text-blue-600 shadow-sm" 
            : "text-slate-400 hover:text-slate-600"
          }`}
        >
          {l === "en" ? "EN" : "বাংলা"}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;