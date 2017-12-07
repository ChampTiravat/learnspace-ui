import React from "react";
import styled from "styled-components";
import Head from "next/head";

import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import NavigationBar from "../core/components/NavigationBar";
import Container from "../core/components/Container";
import Panel from "../core/components/Panel";
import UserConnectionStatusPanel from "../core/components/UserConnectionStatusPanel";
import ChatMessagesPanel from "../core/components/ChatMessagesPanel";
import ActivityPanel from "../core/components/ActivityPanel";

const ChatroomModal = () => [
  <Head>
    <title>ห้องแชท | LEARNSPACE</title>
  </Head>,
  <AuthenticatedLayout>
    <NavigationBar isLoggedIn={true} />
    <Container>
      <Panel left width="40">
        <UserConnectionStatusPanel />
      </Panel>
      <Panel right width="60">
        <ChatMessagesPanel />
      </Panel>
      <ActivityPanel />
    </Container>
  </AuthenticatedLayout>
];

export default ChatroomModal;
