'use client';
import { setCookie, parseCookies } from 'nookies';
import { createContext, useState, ReactNode, useMemo, useEffect } from "react";

export interface LanguageContextValue {
  language: string;
  setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState('en');
    // Get the language from the cookie on first render
    let storedLanguage = "en";
    if (typeof window !== "undefined") {
      const cookies = parseCookies();
      storedLanguage = cookies.language || "en";
    }
  const value = useMemo(() => ({ language, setLanguage }), [language]);

  // Update the cookie value whenever the language changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCookie(null, 'language', language, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageProvider, LanguageContext };