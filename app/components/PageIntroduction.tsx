"use client";
import { useLanguageContext } from "../hooks/useLanguageContext";
import { usePageIntroduction } from "../hooks/usePageIntroduction";

type PageIntroductionProps = {
  title: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
};

export default function PageIntroduction({
  title,
  description,
}: PageIntroductionProps) {
  const { language } = useLanguageContext();
  const { pageIntroDivRef } = usePageIntroduction();
  return (
    <div
      className="grid gap-3 mx-auto max-w-screen-sm  lg:max-w-screen-lg text-center p-5 lg:py-8"
      ref={pageIntroDivRef}
    >
      <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        {language === "en" ? title.en : title.tr}
      </h2>
      <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
        {language === "en" ? description.en : description.tr}
      </p>
    </div>
  );
}
