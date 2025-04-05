"use client";
import React from "react";
import { useLanguageContext } from "../hooks/useLanguageContext";

interface FootnotesProps {
  footnotes: {
    en: string;
    tr: string;
  }[];
}

export default function Footnotes({ footnotes }: FootnotesProps) {
  const language = useLanguageContext().language;
  return (
    <div className="dark:text-white text-[10px]">
      <ol className="list-decimal list-inside">
        {footnotes.map((footnote, index) => (
          <li key={index} className="mb-1">
            {language === "en" ? footnote.en : footnote.tr}
          </li>
        ))}
      </ol>
    </div>
  );
}
