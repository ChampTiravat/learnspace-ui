import React from "react";
import Head from "next/head";
import styled from "styled-components";

import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import Card, { Header, Body } from "../core/components/Card";
import NavigationBar from "../core/components/NavigationBar";
import Container from "../core/components/Container";
import ActivityPanel from "../core/components/ActivityPanel";
import NotificationPanel from "../core/components/NotificationPanel";
import Panel from "../core/components/Panel";
import withData from "../core/withData";

const PostPage = () => [
  <Head>
    <title>Introduction to Artificial Intelligence | LEARNSPACE</title>
  </Head>,
  <AuthenticatedLayout>
    <NavigationBar isLoggedIn={true} />
    <Container>
      <Panel left width="60">
        <Card
          fluidWidth
          padding="5em"
          style={{
            height: "1500px",
            marginBottom: "6em"
          }}
        >
          aasdasdasd
        </Card>
      </Panel>
      <Panel right style={{ position: "fixed", marginLeft: "2em" }}>
        <NotificationPanel />
      </Panel>
      <ActivityPanel />
    </Container>
  </AuthenticatedLayout>
];

export default withData(PostPage);