import React from "react";
import styled from "styled-components";

import { SuccessButton, DangerButton } from "../../../Button";
import Card, { Body, Footer } from "../../../Card";

/**
 * @name Map
 * @desc Display a map from Google Map with a specific location, detemined by a post creator
 */
const Map = () => (
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
        Map
      </div>
    </Body>
    <Footer>
      <SuccessButton marginRight="0.5em">เสร็จสิ้น</SuccessButton>
      <DangerButton>ยกเลิก</DangerButton>
    </Footer>
  </Card>
);

export default Map;
