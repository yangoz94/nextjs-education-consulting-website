import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function useThemeChanger()  {
    const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

    const light = theme === "light";

    return {light, setTheme}
}
