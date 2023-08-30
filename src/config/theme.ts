const theme = {
  lightMode: {
    colors: {
      bg: {
        primary: "#F5F5F5",
        secondary: "#ECEFF1",
        accent: "#FFFFFF",
      },
      text: {
        primary: "#333333",
        secondary: "#4A6572",
        accent: "#777777",
      },
      err: {
        primary: "#E57373",
        secondary: "#81C784",
        accent: "#FF5733",
      },
    },
  },
  darkMode: {
    colors: {
      bg: {
        primary: "#222222",
        secondary: "#C4C3CA",
        accent: "#444444",
      },
      text: {
        primary: "#FFFFFF",
        secondary: "#0F766E",
        accent: "#CCCCCC",
      },
      err: {
        primary: "#B91C1C",
        secondary: "#15803D",
        accent: "#B9B61C",
      },
    },
  },
};

export default theme;

export type Theme = typeof theme;
export type ThemeMode = keyof Theme;
export type ThemeSections = keyof Theme[ThemeMode]["colors"];
export type BgColors = keyof Theme[ThemeMode]["colors"]["bg"];
export type TextColors = keyof Theme[ThemeMode]["colors"]["text"];
export type ErrColors = keyof Theme[ThemeMode]["colors"]["err"];
