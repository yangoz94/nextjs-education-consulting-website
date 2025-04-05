"use client";
import { useLanguageContext } from "../hooks/useLanguageContext";

type MovingSliderProps = {
  width: number;
  texts: { en: string; tr: string }[];
};

export default function MovingSlider(props: MovingSliderProps) {
  const { language } = useLanguageContext();
  return (
    <div className="overflow-hidden group whitespace-nowrap max-w-xl px-5  mx-auto relative before:absolute before:top-0 before:left-0 before:w-[100px] before:h-full before:content-[''] before:bg-gradient-pseudo-left dark:before:bg-gradient-pseudo-left-dark before:z-10 after:absolute after:top-0 after:right-0 after:w-[100px] after:h-full after:content-[''] after:bg-gradient-pseudo-right dark:after:bg-gradient-pseudo-right-dark after:z-10  ">
      {[...Array(2)].map((_, index) => (
        <div
          key={index}
          className={`animate-shift inline-flex group-hover:pause  w-[${
            props.texts.length * props.width
          }px]`}
        >
          {props.texts.map((text, index) => (
            <div
              key={index}
              className="rounded-xl  text-gray-500 dark:text-gray-400 mx-16"
            >
              <h1 className={`p-2 w-${props.width}`}>
                {language === "en" ? text.en : text.tr}
              </h1>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
