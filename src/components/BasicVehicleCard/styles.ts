import styled from "styled-components";
import { Transition } from "../Transition";

export const Wrapper = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  box-shadow: 0 2px 4px 2px ${({ theme }) => theme.colors.bg.primary};

  ${Transition}
`;

export const Image = styled.img`
  height: 160px;
  margin: 0 auto;
  padding: 12px;
  display: block;
`;

export const CardInfosContainer = styled.div`
  padding: 12px;
  border-radius: 0 0 8px 8px;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  display: flex;
  justify-content: space-between;
  gap: 8px;

  ${Transition}
`;

export const Infos = styled.div`
  display: flex;
  gap: 8px;
`;
