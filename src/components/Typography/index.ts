import styled, { css } from "styled-components";
import { TextColors } from "../../config/theme";
import { Transition } from "../Transition";

export interface ITypography {
  size?: 12 | 14 | 16 | 20 | 24 | 28 | 32 | 36 | 40;
  mobileSize?: 12 | 14 | 15 | 16 | 20 | 22 | 28 | 30 | 36 | 40;
  lineHeight?: number;
  weight?: 400 | 600 | 700;
  spacing?: "-0.03em" | "-0.02em" | "normal" | "0.1em";
  color?: TextColors;
  hover?: TextColors;
  centered?: boolean;
}

export const Typography = styled.span<ITypography>`
  ${({
    theme,
    size = 16,
    weight = 400,
    spacing = "normal",
    lineHeight = 100,
    color = "primary",
    hover,
    centered = false,
  }) => css`
    font-size: ${size / 16}rem;
    line-height: ${lineHeight}%;
    font-weight: ${weight};
    letter-spacing: ${spacing};
    color: ${theme.colors.text[color] || color};

    ${centered &&
    css`
      text-align: center;
    `}

    ${Transition}
    ${!!hover &&
    css`
      &:hover {
        color: ${theme.colors.text[hover]};
      }
    `}
  `}
`;
