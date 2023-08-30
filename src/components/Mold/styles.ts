import styled from "styled-components";
import { Scroll } from "../Scroll";

export const Wrapper = styled.main`
  width: 1336px;
  max-width: 100%;
  height: 640px;
  max-height: 100%;
  margin: auto;
  display: flex;

  position: fixed;
  inset: 0;

  ${Scroll}
`;
