import React from "react";
import Head from "next/head";
import styled from "styled-components";

import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import Card, { Header, Body } from "../core/components/Card";
import NavigationBar from "../core/components/NavigationBar";
import Container from "../core/components/Container";
import Wallpaper from "../core/components/Wallpaper";
import ActivityPanel from "../core/components/ActivityPanel";
import NotificationPanel from "../core/components/NotificationPanel";
import ClassroomsList from "../core/components/ClassroomsList";
import Panel from "../core/components/Panel";
import withData from "../core/withData";

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
    color: ${p => p.theme.primaryColor};
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

const PageHeadingPanel = ({ child }) => (
  <Card fluidWidth textCenter padding="1.5em 1em">
    <DashboardPageHeadingIcon src="/static/images/mascots/charcter.svg" />
    <DashboardPageHeading>
      <h2>คุณสามารถดูการแจ้งเตือนและสิ่งที่เกิดขึ้นได้ที่นี่</h2>
      <p>ศูนย์รวมการแจ้งเตือนต่างๆของห้องเรียนที่คุณได้สร้างหรือเข้าร่วม</p>
    </DashboardPageHeading>
  </Card>
);

const DashboardPage = () => [
  <Head>
    <title>หน้าหลัก | LEARNSPACE</title>
  </Head>,
  <AuthenticatedLayout>
    <NavigationBar isLoggedIn={true} />
    <Container>
      <Panel left width="40">
        <NotificationPanel />
      </Panel>
      <Panel right width="60">
        <PageHeadingPanel />
        <ClassroomsList />
      </Panel>
      <ActivityPanel />
    </Container>
  </AuthenticatedLayout>
];

export default withData(DashboardPage);
