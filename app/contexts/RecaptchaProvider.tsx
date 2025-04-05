"use client";
//This component is just a wrapper to avoid using 'use client' in contact page for SEO purposes.
import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useLanguageContext } from "../hooks/useLanguageContext";

interface RecaptchaProviderProps {
  children: React.ReactNode;
}

export default function RecaptchaProvider({
  children,
}: RecaptchaProviderProps) {
  const language = useLanguageContext().language;

  return (
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC as string}
        language={language}
      >
        {children}
      </GoogleReCaptchaProvider>
  );
}
