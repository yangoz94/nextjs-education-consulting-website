"use client";
import React from "react";
import Link from "next/link";
import { useLanguageContext } from "../hooks/useLanguageContext";
import { BsFillCalendarCheckFill } from "react-icons/bs";

export default function CalendlyWidget() {
  const { language } = useLanguageContext();
  const calendlyLink = "https://calendly.com/helios-admissions/45min";

  const handleCalendlyClick = () => {
    window.open(calendlyLink, "_blank");
  };

  return (
    <div className="fixed bottom-5 right-5 z-10 active:scale-90">
      <Link
        href={calendlyLink}
        target="_blank"
        className="hidden lg:block  bg-black transition-all duration-200 text-sm hover:scale-105 dark:bg-LIGHT_SECONDARY_BG_COLOR  text-white dark:text-black  rounded-lg py-2 px-3  tracking-wide "
      >
        {language === "en" ? "Book A Call" : "Randevu Al"}
      </Link>
      <button className="lg:hidden dark:invert" onClick={handleCalendlyClick}>
        <BsFillCalendarCheckFill size={27} />
      </button>
    </div>
  );
}
