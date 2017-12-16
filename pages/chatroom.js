import React from "react";
import styled from "styled-components";
import Head from "next/head";

import UserConnectionStatusPanel from "../core/components/UserConnectionStatusPanel";
import NavigationBar from "../core/components/NavigationBar/NavigationBar";
import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import ChatMessagesPanel from "../core/components/ChatMessagesPanel";
import ActivityPanel from "../core/components/ActivityPanel";
import Container from "../core/components/Container";
import Panel from "../core/components/Panel";
import withData from "../core/withData";

class ChatroomPage extends React.Component {
  render() {
    return [
      <Head>
        <title>ห้องแชท | LEARNSPACE</title>
      </Head>,
      <AuthenticatedLayout>
        <Container>
          <Panel left width="40">
            <UserConnectionStatusPanel />
          </Panel>
          <Panel right width="60">
            <ChatMessagesPanel />
          </Panel>
        </Container>
      </AuthenticatedLayout>
    ];
  }
}

export default withData(ChatroomPage);
