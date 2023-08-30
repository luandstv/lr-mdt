import styled from "styled-components";
import { Transition } from "../Transition";

export const Wrapper = styled.div`
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.bg.primary};
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${Transition}
`;

export const Image = styled.img`
  width: 100%;
  height: 120px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ImportPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ClientPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.bg.primary};
  ${Transition}

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.secondary};

    span {
      color: ${({ theme }) => theme.colors.text.secondary};
    }
  }
`;
