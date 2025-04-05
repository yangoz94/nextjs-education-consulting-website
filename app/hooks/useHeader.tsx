import { useState, useEffect, useRef } from "react";
import { useLanguageContext } from "./useLanguageContext";
import { gsap } from "gsap";

interface NavBarItem {
  name: {
    en: string;
    tr: string;
  };
  href: string;
}

interface IUseHeaderReturn {
  language: string;
  NAV_BAR_ITEMS: NavBarItem[];
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  headerRef: React.RefObject<HTMLElement>;
}

export function useHeader(): IUseHeaderReturn {
  const language = useLanguageContext().language;
  const NAV_BAR_ITEMS: NavBarItem[] = [
    {
      name: {
        en: "HOME",
        tr: "ANASAYFA",
      },
      href: "/",
    },
    {
      name: {
        en: "SERVICES",
        tr: "HİZMETLER",
      },
      href: "/services",
    },
    {
      name: {
        en: "FAQ",
        tr: "SSS",
      },
      href: "/faq",
    },
    {
      name: {
        en: "CONTACT",
        tr: "İLETİŞİM",
      },
      href: "/contact",
    },
  ];

  const [activeLink, setActiveLink] = useState("");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Set active link(necessary for accessing via url with specific pathnames; e.g. .../about)
    if (typeof window !== "undefined") {
      setActiveLink(window.location.pathname);
    }

    // GSAP Animations
    const headerAnimation = gsap.to(headerRef.current!, {
      duration: 0.2,
      y: 0,
      ease: "power3.out",
    });

    const headerAnimation2 = gsap.to(headerRef.current!, {
      duration: 0.2,
      opacity: 1,
      ease: "power3.out",
    });

    const tl = gsap.timeline();
    tl.add(headerAnimation);
    tl.add(headerAnimation2);
  }, []);

  return {
    language,
    NAV_BAR_ITEMS,
    activeLink,
    setActiveLink,
    headerRef,
  };
}
