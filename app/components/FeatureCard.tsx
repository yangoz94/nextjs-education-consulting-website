"use client";
import Image from "next/image";
import { useLanguageContext } from "../hooks/useLanguageContext";

type FeatureProps = {
  title: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  style?: string;
};

export default function FeatureCard(props: FeatureProps) {
  const { language } = useLanguageContext();

  return (
    <div
      className={` flex flex-col xl:flex-row gap-5  justify-items-start  ${props.style}`}
    >
      <Image
        width={0}
        height={0}
        alt="a checkmark icon"
        src={"/icons8-checkmark.svg"}
        style={{
          width: "50px",
          margin: "0 auto 0 auto",
        }}
        className="dark:invert"
      />
      <div className="flex flex-col gap-5 xl:gap-2 items-center xl:items-start  ">
        <h1 className="text-xl text-gray-800 dark:text-white text-center ">
          {language === "en" ? props.title.en : props.title.tr}
        </h1>
        <p className="text-gray-500 text-justify ">
          {language === "en" ? props.description.en : props.description.tr}
        </p>
      </div>
    </div>
  );
}
