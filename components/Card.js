import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  height: auto;
  background-color: #fff;
  margin: 2em auto;
  padding: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  padding: 1.2em;
  margin: 0 auto;
  text-align: center;
  font-size: 1em;
  font-weight: 400;
  color: ${p => p.theme.primaryColor};
`;

export const Footer = styled.div`
  padding: 0.9em;
  margin: 0 auto;
  text-align: left;
`;

export const Body = styled.div`
  padding: 0.9em;
  margin: 0 auto;
  text-align: left;
`;

export default Card;
