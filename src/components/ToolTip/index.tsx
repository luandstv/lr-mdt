import { Typography } from "../Typography";
import * as S from "./styles";

interface ITooltip {
  text: string;
  children: React.ReactNode;
}

export function Tooltip({ text, children }: ITooltip) {
  return (
    <S.TooltipContainer>
      {children}
      <Typography weight={600}>{text}</Typography>
    </S.TooltipContainer>
  );
}
