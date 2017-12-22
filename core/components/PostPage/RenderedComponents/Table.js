import styled from "styled-components";

const TableWrapper = styled.div`
  width: 100%;
  table {
    width: 100%;
    background-color: #fff;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin: 1em auto;
    thead {
      border: none;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      th {
        color: ${p => p.theme.PRIMARY_COLOR};
        font-size: 1em;
        font-weight: 500;
        text-align: center;
        padding: 0.5em;
      }
    }
    tbody {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      tr {
        color: #777;
        font-weight: 300;
        font-family: "calibri";
        &:hover {
          box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
          color: ${p => p.theme.PRIMARY_COLOR};
          font-weight: 500;
        }
        td {
          padding: 0.7em 0.5em;
          text-align: center;
        }
      }
    }
  }
`;

/**
 * @name Table
 * @desc Display a data as a grid
 */
const Table = ({ children }) => (
  <TableWrapper>
    <table>{children}</table>
  </TableWrapper>
);

export default Table;
