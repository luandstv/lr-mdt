import { useAutoAnimate } from "@formkit/auto-animate/react";
import * as S from "./styles";

interface IMold {
  children: React.ReactNode;
}

export function Mold({ children }: IMold) {
  const [parent] = useAutoAnimate<HTMLDivElement>();
  return <S.Wrapper ref={parent}>{children}</S.Wrapper>;
}
