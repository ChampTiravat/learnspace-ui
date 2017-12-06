import React from "react";
import styled from "styled-components";

import Card from "./Card";

const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 88;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalPanel = Card.extend`
  margin: 6em auto;
`;

const Modal = props => (
  <ModalBackground>
    <ModalPanel {...props}>{props.children}</ModalPanel>
  </ModalBackground>
);

export default Modal;
