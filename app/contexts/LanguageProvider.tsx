'use client';
import { useState, ReactNode, useMemo, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";

interface LanguageProviderProps {
  children: ReactNode;
}

function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState('en');

  // Get the language from localStorage on first render
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  // Update the localStorage value whenever the language changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageProvider };