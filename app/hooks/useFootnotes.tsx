import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export function useFootnotes() {
  const footnotesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.from(footnotesRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footnotesRef.current,
        start: "top 90%",
      },
    });
  }, []);

  return { footnotesRef };
}
