import styled from "styled-components";

const NavbarLink = styled.li`
  display: inline-block;
  padding: 0.4em 0.7em;
  margin: 0;
  a {
    color: #fff;
    padding: 0.3em 0.7em;
    border-radius: 5px;
    font-size: 1.1em;
    font-weight: 300;
    text-decoration: none;
    &:hover {
      background-color: #fff;
      color: #3b90f9;
      cursor: pointer;
    }
  }
`;

export default NavbarLink;
