import styled from "styled-components";
import { Transition } from "../Transition";

export const Wrapper = styled.div`
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  box-shadow: 4px 0 16px -12px ${({ theme }) => theme.colors.bg.secondary};
  z-index: 1;

  ${Transition}
`;

export const Menu = styled.ul`
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MenuItem = styled.li<{ selected?: boolean }>`
  padding: 8px 12px;
  background-color: ${({ theme, selected }) =>
    selected && theme.colors.bg.secondary};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.text.secondary : theme.colors.text.accent};
  border-radius: 8px;
  gap: 8px;
  will-change: transform;
  cursor: pointer;

  ${Transition}

  svg {
    width: 32px;
    height: 32px;
  }

  &:hover {
    background-color: ${({ theme, selected }) =>
      !selected && theme.colors.bg.accent};

    color: ${({ theme, selected }) => !selected && theme.colors.text.primary};
  }
`;
