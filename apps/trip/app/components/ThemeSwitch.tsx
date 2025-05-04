import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon } from "lucide-react";
import { MoonIcon } from "lucide-react";
import { Toggle } from "@haeram/ui/Toggle";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Toggle
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      variant="outline"
    >
      {theme === "light" ? (
        <SunIcon className="size-6" />
      ) : (
        <MoonIcon className="size-6" />
      )}
    </Toggle>
  );
};

export default ThemeSwitch;
