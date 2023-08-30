import styled from "styled-components";
import { Transition } from "../Transition";

export const Container = styled.main`
  width: 100%;
  max-height: 100%;
  padding: 24px 0;
  background-color: ${({ theme }) => theme.colors.bg.accent};
  border-radius: 0 8px 8px 0;

  ${Transition}
`;
