import styled from "styled-components";
import { Transition } from "../Transition";

export const Wrapper = styled.div`
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  box-shadow: 0 2px 4px 2px ${({ theme }) => theme.colors.bg.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Transition}
`;
