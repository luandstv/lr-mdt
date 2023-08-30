import { useState } from "react";
import { ThemeMode } from "../../config/theme";

import * as S from "./styles";

interface IThemeSwitch {
  theme: ThemeMode;
  handleChangeTheme: (theme: ThemeMode) => void;
}

export function ThemeSwitch({ theme, handleChangeTheme }: IThemeSwitch) {
  const [checked, setChecked] = useState(theme === "darkMode");

  function handleChange(v: ThemeMode) {
    setChecked(v === "darkMode");
    handleChangeTheme(v);
  }

  return (
    <S.StyledToggleSwitch>
      <S.SwitchWrapper>
        <S.HiddenCheckbox
          checked={checked}
          onChange={() =>
            handleChange(theme === "lightMode" ? "darkMode" : "lightMode")
          }
        />
        <S.Slider />
        <S.SliderIcon checked={checked} />
      </S.SwitchWrapper>
    </S.StyledToggleSwitch>
  );
}
