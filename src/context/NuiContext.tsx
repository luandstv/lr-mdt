import { createContext, useState, ReactNode } from "react";
import { RecordsTemplate } from "../templates/RecordsTemplate";
import { ThemeMode } from "../config/theme";

interface NuiContextData {
  status: boolean;
  HandleChangeStatus: (val: boolean) => void;
  template: React.ReactNode;
  handleChangeTemplate: (component: React.ReactNode) => void;
  themeStyle: ThemeMode;
  handleChangeTheme: (theme: ThemeMode) => void;
}

interface PlayerContextProviderProps {
  children: ReactNode;
}

export const NuiContext = createContext({} as NuiContextData);

export function NuiContextProvider({ children }: PlayerContextProviderProps) {
  const [status, setStatus] = useState(false);
  const [template, setTemplate] = useState<React.ReactNode>(
    <RecordsTemplate />
  );
  const [themeStyle, setThemeStyle] = useState<ThemeMode>(
    (localStorage.getItem("theme") as ThemeMode) || "lightMode"
  );

  function HandleChangeStatus(val: boolean) {
    setStatus(val);
  }

  function handleChangeTemplate(component: React.ReactNode) {
    setTemplate(component);
  }

  function handleChangeTheme(theme: ThemeMode) {
    setThemeStyle(theme);
    localStorage.setItem("theme", theme);
  }

  return (
    <NuiContext.Provider
      value={{
        status,
        HandleChangeStatus,
        template,
        handleChangeTemplate,
        themeStyle,
        handleChangeTheme,
      }}
    >
      {children}
    </NuiContext.Provider>
  );
}
