"use client";
import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";
import { useLanguageContext } from "../hooks/useLanguageContext";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: { en: string; tr: string };
  className?: string;
}

export default function PrimaryButton({ ...props }: PrimaryButtonProps) {
  const language = useLanguageContext().language;
  return (
    <div className="flex justify-center items-center">
      <button
        {...props}
        className={`bg-black hover:bg-blue-600 text-white text-lg font-medium px-4 py-2 rounded active:scale-90 transition-all duration-200 ${props.className} `}
      >
        {language === "en" ? props.label.en : props.label.tr}
      </button>
    </div>
  );
}
