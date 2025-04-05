import { useLayoutEffect, useRef, useState } from "react";
import { useLanguageContext } from "./useLanguageContext";
import { gsap } from "gsap";
export default function useQA() {
  useLayoutEffect(() => {
    // GSAP Animations

    gsap.fromTo(
      ".gsap-qa",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        ease: "easeInOut",
      }
    );
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const language = useLanguageContext().language;

  return { isOpen, setIsOpen, language };
}
