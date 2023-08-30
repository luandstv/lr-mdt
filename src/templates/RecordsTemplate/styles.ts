import styled from "styled-components";
import { Transition } from "../../components/Transition";

export const Wrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 24px;
  overflow-y: auto;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const NoticeBoardContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  background-color: #323232;
  border-radius: 8px;
  height: 200px;
  width: 100%;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #646464; /* Cor do divisor */
  margin: 10px 0; /* Espaçamento vertical */
`;

export const EmptyNoticeBoard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-size: 16px;
`;

export const AddNoticeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 32px;
  width: 250px;
  font-size: 24px;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.primary};

  background-color: ${({ theme }) => theme.colors.bg.primary};
  ${Transition}

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.secondary};

    span {
      color: ${({ theme }) => theme.colors.text.secondary};
    }
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Balances = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

export const LastClientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LastClients = styled.div`
  overflow-y: auto;
  height: 220px;
`;
