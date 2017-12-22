import styled from "styled-components";

const TableWrapper = styled.div`
  width: 100%;
  margin-top: 2em;
  h1 {
    color: ${p => p.theme.PRIMARY_COLOR};
    font-size: 1.3em;
    font-weight: 500;
    text-align: center;
    margin-bottom: 0;
  }
  p {
    display: block;
    color: #777;
    font-size: 0.8em;
    font-weight: 400;
    font-family: "Calibri";
    text-align: center;
    margin-top: 0.5em;
    margin-bottom: 1em;
  }
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
const Table = ({ children, description, name }) => (
  <TableWrapper>
    <h1>{name}</h1>
    <p>{description}</p>
    <table>{children}</table>
  </TableWrapper>
);

export default Table;
