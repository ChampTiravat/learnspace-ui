import React from "react";
import styled from "styled-components";

import { LightButton, SuccessButton, DangerButton } from "../../../Button";
import Card, { Body, Footer } from "../../../Card";

/**
 * @name SlideShow
 * @desc Display a set of images as a slideshow with a specific timing
 */
const SlideShow = () => (
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

export default SlideShow;
