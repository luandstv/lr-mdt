import styled from "styled-components";
import { Transition } from "../Transition";

export const SwitchWrapper = styled.label`
  display: block;
  --width-of-switch: 3.5em;
  --height-of-switch: 2em;
  --size-of-icon: 1.4em;
  --slider-offset: 0.3em;
  position: relative;
  width: var(--width-of-switch);
  height: var(--height-of-switch);
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  border-radius: 30px;

  ${Transition}
`;

export const SliderIcon = styled.span<{ checked: boolean }>`
  position: absolute;
  content: "";
  height: var(--size-of-icon, 1.4em);
  width: var(--size-of-icon, 1.4em);
  border-radius: 20px;
  left: ${(props) =>
    props.checked
      ? "calc(100% - (var(--size-of-icon, 1.4em) + var(--slider-offset, 0.3em)))"
      : "var(--slider-offset, 0.3em)"};
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
  box-shadow: ${(props) =>
    props.checked
      ? "inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb"
      : "none"};

  ${Transition}
`;

export const StyledToggleSwitch = styled.div`
  display: inline-block;

  input:checked + ${Slider} {
    background-color: #303136;
  }
`;
