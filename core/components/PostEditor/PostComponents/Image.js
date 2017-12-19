import React from "react";
import styled from "styled-components";

import { LightButton, SuccessButton, DangerButton } from "../../Button";
import Card, { Body, Footer } from "../../Card";

/**
 * @name Image
 * @desc Display a normal image
 */
const Image = () => (
  <Card fluidWidth marginBottom="2em">
    <Body>
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
    </Body>
    <Footer>
      <SuccessButton marginRight="0.5em">เสร็จสิ้น</SuccessButton>
      <DangerButton>ยกเลิก</DangerButton>
    </Footer>
  </Card>
);

export default Image;
