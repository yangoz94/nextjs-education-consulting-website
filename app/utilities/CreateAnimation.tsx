import { gsap } from "gsap";
export default function createAnimation(target: HTMLElement, duration: number, properties: gsap.TweenVars) {
    return gsap.to(target, {
      duration,
      ...properties,
    });
  };