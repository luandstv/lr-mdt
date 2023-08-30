import * as S from "./styles";

interface ITemplate {
  children: React.ReactNode;
}

export function Template({ children }: ITemplate) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
