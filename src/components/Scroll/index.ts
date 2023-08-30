import { css } from "styled-components";

export const Scroll = css`
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.bg.secondary};
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.bg.primary};
    border-radius: 8px;
    box-shadow: inset 0 0 4px ${({ theme }) => theme.colors.text.accent};
  }
`;
