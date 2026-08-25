"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { translations, type Dictionary, type Locale } from "@/lib/translations";

type LanguageContextValue = {
  lang: Locale;
  setLang: (l: Locale) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "geraldoneto-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Locale>("pt");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "pt" || stored === "en" || stored === "zh") {
      // Sincronização única de fonte externa (localStorage) no mount —
      // não dá pra usar inicializador lazy no useState porque o SSR
      // não tem acesso a window, causaria mismatch de hidratação.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(stored);
    }
  }, []);

  const setLang = useCallback((l: Locale) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage precisa ser usado dentro de LanguageProvider");
  }
  return ctx;
}
