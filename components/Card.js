import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  height: auto;
  background-color: #fff;
  margin: 0 auto;
  padding: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
`;

export const Header = styled.div`
  padding: 1.2em;
  margin: 0 auto;
  text-align: center;
  font-size: 1em;
  font-weight: 400;
  color: ${p => p.theme.primaryColor};
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
`;

export const Footer = styled.div`
  padding: 0.9em;
  margin: 0 auto;
  text-align: left;
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
`;

export const Body = styled.div`
  padding: 0.9em;
  margin: 0 auto;
  text-align: left;
  font-size: 1em;
  font-weight: 300;
  font-color: ${({ theme }) => theme.textColor};
`;

export default Card;
