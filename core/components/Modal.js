import React from "react";
import styled from "styled-components";

import Card from "./Card";

export const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 88;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${p => (p.show ? "block" : "none")};
  overflow-y: auto;
`;

export const ModalPanel = Card.extend`
  margin: 6em auto;
`;
