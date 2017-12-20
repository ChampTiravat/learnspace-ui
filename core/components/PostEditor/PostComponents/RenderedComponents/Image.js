import React from "react";
import styled from "styled-components";

import { LightButton, SuccessButton, DangerButton } from "../../../Button";
import Card, { Body, Footer } from "../../../Card";

/**
 * @name Image
 * @desc Display a normal image
 */
const Image = () => (
  <div
    style={{
      height: "250px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ddd"
    }}
  >
    <LightButton>เลือกรูปภาพ</LightButton>
  </div>
);

export default Image;
