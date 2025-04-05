"use client";
import Image from "next/image";
import { useLanguageContext } from "../hooks/useLanguageContext";
import { useCofounder } from "../hooks/useCofounder";

type CofounderProps = {
  name: string;
  imagePath: string;
  imageAlt: string;
  description: {
    en: string;
    tr: string;
  };
  index: number;
};

export default function Cofounder(props: CofounderProps) {
  const { language } = useLanguageContext();
  const { cofounderRef } = useCofounder();
  return (
    <div
      className={`flex flex-col lg:flex-row lg:px-8 border-none dark:text-white
        text-justify mx-auto rounded-xl lg:gap-8 gap-5  lg:max-w-[1000px] max-w-[600px] justify-center items-center lg:items-start`}
      ref={cofounderRef}
    >
      <Image src={props.imagePath} alt={props.imageAlt} width={250} height={250} quality={100} />
      <div className="flex flex-col gap-2 lg:gap-5 leading-[1.42]">
        <div className="flex flex-col text-xl text-center lg:text-left lg:mt-[-5px] ">
          <h1 className="font-bold ">{props.name}</h1>
          <h2 className="font-thin">{language === "en" ? "Co-founder" : "Kurucu"}</h2>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">{language === "en" ? props.description.en : props.description.tr}</p>
        </div>
      </div>
    </div>
  );
}
