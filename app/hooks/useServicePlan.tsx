import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useServicePlan() {
  const hRef = useRef<any>(null);
  const pRef = useRef<any>(null);
  const spanRef = useRef<any>(null);
  const uRef = useRef<any>(null);

  useEffect(() => {
    // Create an array of refs and a delay value
    const refs = [hRef, pRef, spanRef, uRef];
    const delay = 0.1;

    // Loop through the refs and animate them with a staggered delay
    refs.forEach((ref, index) => {
      gsap.from(ref.current, {
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        delay: index * delay, // Increase the delay by the index
        scrollTrigger: {
          trigger: ref.current,
          start: "top 105%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return { hRef, pRef, spanRef, uRef };
}
