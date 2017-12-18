import React from "react";
import Head from "next/head";
import styled from "styled-components";

import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import NotificationPanel from "../core/components/NotificationPanel";
import { PageHeadingPanel } from "../core/components/DashboardPage";
import ClassroomsList from "../core/components/ClassroomsList";
import Card, { Header, Body } from "../core/components/Card";
import ActivityPanel from "../core/components/ActivityPanel";
import Container from "../core/components/Container";
import Wallpaper from "../core/components/Wallpaper";
import Panel from "../core/components/Panel";
import withData from "../core/withData";

const DashboardPage = () => [
  <Head>
    <title>หน้าหลัก | LEARNSPACE</title>
  </Head>,
  <AuthenticatedLayout>
    <Container>
      <Panel left width="40">
        <NotificationPanel />
      </Panel>
      <Panel right width="60">
        <PageHeadingPanel />
        <ClassroomsList height="500px" />
      </Panel>
    </Container>
  </AuthenticatedLayout>
];

export default withData(DashboardPage);
