import { setCookie } from "nookies";
import { useLanguageContext } from "../hooks/useLanguageContext";
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

interface Language {
  name: string;
  code: string;
}

interface UseLanguageDropdownReturn {
  context: ReturnType<typeof useLanguageContext>;
  LANGUAGES: Language[];
  isDropDownOpen: boolean;
  setIsDropDownOpen: Dispatch<SetStateAction<boolean>>;
  handleLanguageSelection: (event: MouseEvent<HTMLLIElement>) => void;
  handleOptionClick: (event: MouseEvent<HTMLLIElement>) => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
}

export function useLanguageDropdown(): UseLanguageDropdownReturn {
  const context = useLanguageContext();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const LANGUAGES: Language[] = [
    {
      name: context.language === "en" ? "ENGLISH" : "İNGİLİZCE",
      code: "en",
    },

    {
      name: context.language === "en" ? "TURKISH" : "TÜRKÇE",
      code: "tr",
    },
  ];

  useEffect(() => {
    // Update the language value in the cookie
    setCookie(null, "language", context.language, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
  }, [context.language]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropDownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsDropDownOpen]);

  const handleLanguageSelection = (
    event: React.MouseEvent<HTMLLIElement>
  ): void => {
    const value = event.currentTarget.innerText.toLowerCase();
    const language = LANGUAGES.find(
      (language) => language.name.toLowerCase() === value
    );
    if (language) {
      context.setLanguage(language.code);
    }
  };

  const handleOptionClick = (event: React.MouseEvent<HTMLLIElement>): void => {
    handleLanguageSelection(event);
    setIsDropDownOpen(false);
  };

  return {
    context,
    LANGUAGES,
    isDropDownOpen,
    setIsDropDownOpen,
    handleLanguageSelection,
    handleOptionClick,
    dropdownRef,
  };
}
