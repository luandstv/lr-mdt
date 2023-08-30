import styled from "styled-components";
import { Transition } from "../Transition";

export const TooltipContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  span {
    width: max-content;
    visibility: hidden;
    background-color: ${({ theme }) => theme.colors.bg.primary};
    text-align: center;
    border-radius: 8px;
    padding: 8px;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: calc(100% + 40px);
    transform: translateY(-50%);
    opacity: 0;

    ${Transition}

    &::after {
      content: "";
      position: absolute;
      border-style: solid;
      border-width: 8px;
      border-color: transparent ${({ theme }) => theme.colors.bg.primary}
        transparent transparent;
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
    }
  }

  &:hover {
    span {
      visibility: visible !important;
      opacity: 1;
    }
  }
`;
