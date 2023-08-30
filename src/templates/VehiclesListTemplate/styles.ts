import styled from "styled-components";
import { Transition } from "../../components/Transition";

export const Wrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-y: auto;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardsContainer = styled.div`
  padding: 4px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

export const FilterContainer = styled.aside`
  width: 300px;
  padding: 16px 8px;
  position: sticky;
  top: 0;
  right: 0;
  box-shadow: 0 2px 4px 2px ${({ theme }) => theme.colors.bg.primary};

  ${Transition}
`;

export const FilterContentContainer = styled.div`
  text-align: center;

  ${Transition}
`;
