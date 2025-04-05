import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useCofounder() {
  const cofounderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.from(cofounderRef.current, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cofounderRef.current,
        start: "top 95%",
      },
    });
  }, []);
  return { cofounderRef };
}
