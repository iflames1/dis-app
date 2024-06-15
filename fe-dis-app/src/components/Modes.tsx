import React from "react";
import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

interface ModesProps {
  onClose: () => void;
  onThemeChange: (theme: string) => void;
}

export default function Modes({ onClose, onThemeChange }: ModesProps) {
  const handleThemeChange = (theme: string) => {
    onThemeChange(theme);
    onClose();
  };
  return (
    <div
      className="absolute z-10 right-2 overflow-y-auto "
      aria-labelledby="select theme mode"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="min-h-full flex p-4 text-center sm:items-center sm:p-0 ">
        <div
          className="relative transform overflow-hidden rounded-lg  text-left shadow-xl border dark:border-none transition-all sm:my-8 dark:bg-[#181818]"
          onClick={(e) => e.stopPropagation()}
        >
          <List>
            <ListItem
              disablePadding
              className="dark:hover:bg-dark-hover hover:bg-light-hover"
            >
              <ListItemButton onClick={() => handleThemeChange("light")}>
                <ListItemIcon>
                  <LightModeIcon className="text-light-text dark:text-dark-text " />
                </ListItemIcon>
                <ListItemText primary="Light" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              className="dark:hover:bg-dark-hover hover:bg-light-hover"
            >
              <ListItemButton onClick={() => handleThemeChange("dark")}>
                <ListItemIcon>
                  <NightsStayIcon className="text-light-text dark:text-dark-text" />
                </ListItemIcon>
                <ListItemText primary="Dark" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              className="dark:hover:bg-dark-hover hover:bg-light-hover"
            >
              <ListItemButton onClick={() => handleThemeChange("system")}>
                <ListItemIcon>
                  <LaptopWindowsIcon className="text-light-text dark:text-dark-text" />
                </ListItemIcon>
                <ListItemText primary="System" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}
