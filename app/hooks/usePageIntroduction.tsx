import { LegacyRef, MutableRefObject, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export function usePageIntroduction() {
  const pageIntroDivRef = useRef<any>(null);

  useLayoutEffect(() => {
    // GSAP Animations
    gsap.from(pageIntroDivRef.current!, {
      y: -100,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    })
  }, []);

  return { pageIntroDivRef };
}
