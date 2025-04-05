import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export function useFooter() {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    // gsap animations
    gsap.from(footerRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: "ease-in-out",
    });
  }, []);

  return { footerRef };
}
