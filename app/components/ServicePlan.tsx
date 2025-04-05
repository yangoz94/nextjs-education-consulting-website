"use client";
import { useLanguageContext } from "../hooks/useLanguageContext";
import { useServicePlan } from "../hooks/useServicePlan";

type ServicePlanProps = {
  name: { en: string; tr: string };
  price: string;
  description: { en: string; tr: string };
  features: { en: string; tr: string }[];
};

export default function ServicePlan({ name, price, description, features }: ServicePlanProps) {
  const { language } = useLanguageContext();
  const { hRef, pRef, spanRef, uRef } = useServicePlan();

  return (
    <div
      className="flex flex-col p-6 rounded-lg mx-auto max-w-sm  lg:min-w-full text-center text-gray-900
    bg-LIGHT_SECONDARY_BG_COLOR dark:bg-DARK_SECONDARY_BG_COLOR dark:text-white 
    lg:hover:scale-[1.02] transition ease-in-out"
    >
      <h3 className="mb-4 text-2xl font-semibold" ref={hRef}>
        {language === "en" ? name.en : name.tr}
      </h3>
      <p className="font-light text-gray-500 text-base lg:text-lg dark:text-gray-400 text-center lg:h-[110px] lg:mb-[-15px] xl:mb-0 xl:h-auto" ref={pRef}>
        {language === "en" ? description.en : description.tr}
      </p>
      <div className="flex justify-center items-baseline my-8" ref={spanRef}>
        <span className="mr-2 text-5xl font-extrabold">${price}</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left flex flex-col last:justify-end" ref={uRef}>
        {features.map((feature) => (
          <li key={feature.en} className="flex items-center space-x-3">
            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>{language === "en" ? feature.en : feature.tr}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
