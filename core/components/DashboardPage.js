import React from "react";
import styled from "styled-components";

import Card from "./Card";

/**
 * @desc Components related in /dashboard(pages/dashboard.js)
 */

const DashboardPageHeading = styled.div`
  width: 550px;
  display: inline-block;
  text-align: left;
  float: right;
  margin-top: 2.9em;
  margin-right: 1em;
  margin-left: 0;
  h2 {
    font-weight: 400;
    font-size: 1.7em;
    color: ${p => p.theme.PRIMARY_COLOR};
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
    color: #777;
    font-size: 1.1em;
  }
`;

const DashboardPageHeadingIcon = styled.img`
  margin-right: 0;
  width: 110px;
`;

export const PageHeadingPanel = ({ child }) => (
  <Card fluidWidth textCenter padding="1.5em 1em">
    <DashboardPageHeadingIcon src="/static/images/mascots/charcter.svg" />
    <DashboardPageHeading>
      <h2>คุณสามารถดูการแจ้งเตือนและสิ่งที่เกิดขึ้นได้ที่นี่</h2>
      <p>ศูนย์รวมการแจ้งเตือนต่างๆของห้องเรียนที่คุณได้สร้างหรือเข้าร่วม</p>
    </DashboardPageHeading>
  </Card>
);
