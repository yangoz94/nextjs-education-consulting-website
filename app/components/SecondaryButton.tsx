"use client";
import { useLanguageContext } from "../hooks/useLanguageContext";

type SecondaryButtonProps = {
  label: {
    en: string;
    tr: string;
  };
  onClick: () => void;
};

export default function SecondaryButton(props: SecondaryButtonProps) {
  const { language } = useLanguageContext();
  return (
    <button onClick={props.onClick}>
      <p className="rounded-lg font-bold px-4 py-2 text-white bg-black hover:bg-slate-800 md:w-60 w-fit">
        {language === "en" ? props.label.en : props.label.tr}
      </p>
    </button>
  );
}
