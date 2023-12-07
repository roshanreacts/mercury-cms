import styled from "@emotion/styled";

export const TableContainer = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  justifycontent: space-between;
  border: 1px solid grey;
`;

export const TableHead = styled.thead`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-bottom: 1px solid grey;
`;

export const TableHeaderCell = styled.th`
  width: 100%;
  padding: 12px;
  font-weight: bold;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justifycontent: center;
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: row;
  justifycontent: space-evenly;
  border-bottom: 1px solid grey;
  align-items: center;
`;

export const TableCell = styled.td`
  padding: 12px;
  font-size: 14px;
  color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: stretch;
  flex-wrap: wrap;
  align-items: flex-start;

  justifycontent: space-between;
`;
