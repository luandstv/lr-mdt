import { useState } from "react";
import { Tooltip } from "../ToolTip";
import { useNuiContext } from "../../hooks/UseNuiContext";
import { ThemeSwitch } from "../ThemeSwitch";
import { routesArray } from "../../utils/RoutesConversor";

import * as S from "./styles";

export function SideBar() {
  const { themeStyle, handleChangeTheme, handleChangeTemplate } =
    useNuiContext();
  const [isSelected, setIsSelected] = useState(0);

  function handleSelectItem(index: number) {
    if (index === isSelected) return;
    setIsSelected(index);
    handleChangeTemplate(routesArray[index].template);
  }

  return (
    <S.Wrapper>
      <S.Menu>
        <ThemeSwitch theme={themeStyle} handleChangeTheme={handleChangeTheme} />
        {routesArray.map((data, i) => (
          <S.MenuItem
            key={data.description + i}
            selected={isSelected === i}
            onClick={() => handleSelectItem(i)}
          >
            <Tooltip text={data.description}>{data.icon}</Tooltip>
          </S.MenuItem>
        ))}
      </S.Menu>
    </S.Wrapper>
  );
}
