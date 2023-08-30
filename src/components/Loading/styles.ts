import styled, { keyframes } from "styled-components";

export const NewtonsCradleContainer = styled.div`
  --uib-size: 50px;
  --uib-speed: 1.2s;
  --uib-color: #474554;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--uib-size);
  height: var(--uib-size);
`;

const swingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
  }

  25% {
    transform: rotate(70deg);
    animation-timing-function: ease-in;
  }

  50% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }
`;

const swing2Animation = keyframes`
  0% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }

  50% {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
  }

  75% {
    transform: rotate(-70deg);
    animation-timing-function: ease-in;
  }
`;

export const NewtonsCradleDot = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 25%;
  transform-origin: center top;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 25%;
    border-radius: 50%;
    background-color: var(--uib-color);
  }
`;

export const AnimatedDot1 = styled(NewtonsCradleDot)`
  animation: ${swingAnimation} var(--uib-speed) linear infinite;
`;

export const AnimatedDot2 = styled(NewtonsCradleDot)`
  animation: ${swing2Animation} var(--uib-speed) linear infinite;
`;
