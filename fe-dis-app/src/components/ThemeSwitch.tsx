"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Modes from "./Modes";
import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  let Icon: React.ReactNode = <LaptopWindowsIcon />;
  if (theme !== "system") {
    if (theme === "dark") {
      Icon = <NightsStayIcon />;
    } else {
      Icon = <LightModeIcon className="text-amber-500" />;
    }
  }

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>{Icon}</button>
      {isModalOpen && (
        <Modes onClose={closeModal} onThemeChange={handleThemeChange} />
      )}
    </>
  );
}
