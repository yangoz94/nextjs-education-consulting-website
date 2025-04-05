import { useEffect, useRef, useState } from "react";
import { useLanguageContext } from "./useLanguageContext";

export function useHamburger() {
  const [isHamburger, setIsHamburger] = useState(false);
  const language = useLanguageContext().language;
  const hamburgerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target as Node)
    ) {
      
      setIsHamburger(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return {
    hamburgerRef,
    isHamburger,
    setIsHamburger,
    language,
  };
}
