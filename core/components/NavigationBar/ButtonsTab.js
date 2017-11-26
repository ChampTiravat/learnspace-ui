import styled from "styled-components";

export default styled.div`
  display: inline-block;
  padding-right: 1em;
  text-align: right;
  width: 50%;
  ul {
    display: inline-block;
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      display: inline-block;
      padding: 0.4em;
      margin: 0;
      a {
        color: #fff;
        padding: 0.3em 0.5em;
        border-radius: 5px;
        font-size: 1.1em;
        font-weight: 300;
        &:hover {
          background-color: #fff;
          color: #3b90f9;
          cursor: pointer;
        }
      }
    }
  }
`;
