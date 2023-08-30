import styled from "styled-components";
import { Transition } from "../Transition";

export const Wrapper = styled.div`
  margin: 0 auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  text-align: left;

  ${Transition}
`;

export const TableRow = styled.tr`
  ${Transition}

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.bg.primary};
  }
`;

export const TabletBody = styled.tbody``;

export const TableData = styled.td`
  padding: 8px;
  text-align: left;
`;
