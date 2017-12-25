import React from "react";
import styled, { keyframes } from "styled-components";

import Card from "./Card";

const ModalBackgroundAnimation = keyframes`
  from { opacity: 0; }
    to { opacity: 1; }
`;

const ModalPanelAnimation = keyframes`
  from { opacity: 0; transform: translateY(-3em); }
    to { opacity: 1; transform: translateY(0); }
`;

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
  animation: ${ModalBackgroundAnimation} 150ms ease-in;
`;

export const ModalPanel = Card.extend`
  margin: 6em auto;
  animation: ${ModalPanelAnimation} 300ms ease-in;
`;
