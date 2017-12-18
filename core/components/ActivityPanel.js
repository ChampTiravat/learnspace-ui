import styled from "styled-components";

/**
 * @name ActivityPanel
 * @desc Display a menu of each page at the bottom of the screen
 */
const ActivityPanel = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 1em 1em;
  background-color: #fff;
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  text-align: center;
  a {
    display: inline-block;
    padding: 0 1em;
    color: #777;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      color: ${p => p.theme.primaryColor};
    }
  }
`;

export default ActivityPanel;
