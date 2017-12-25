import React from "react";
import Head from "next/head";
import Router from "next/router";

import UserConnectionStatusPanel from "../core/components/ChatroomPage/UserConnectionStatusPanel";
import ClassroomActivityPanel from "../core/components/ClassroomPage/ClassroomActivityPanel";
import ClassroomHeaderPanel from "../core/components/ClassroomPage/ClassroomHeaderPanel";
import ChatMessagesPanel from "../core/components/ChatroomPage/ChatMessagesPanel";
import AuthenticatedLayout from "../core/components/Layout/AuthenticatedLayout";
import { CLASSROOM_PAGE } from "../core/constants/endpoints/ui";
import Container from "../core/components/Container";
import Panel from "../core/components/Panel";
import withData from "../core/withData";

class ChatroomPage extends React.Component {
  static async getInitialProps() {
    return {
      isMember: 1,
      classroomID: "1",
      classroomName: "Introduction to Computer Science"
    };
  }

  render() {
    const { isMember, classroomID, classroomName } = this.props;
    return !isMember
      ? Router.push(CLASSROOM_PAGE)
      : [
          <Head>
            <title>ห้องแชท - {classroomName} | LEARNSPACE</title>
          </Head>,
          <AuthenticatedLayout>
            <ClassroomHeaderPanel
              classroomID={classroomID}
              classroomName={classroomName}
            />
            <Container marginTop="12em">
              <Panel left width="40" paddingBottom="6em">
                <UserConnectionStatusPanel />
              </Panel>
              <Panel right width="60" paddingBottom="6em">
                <ChatMessagesPanel />
              </Panel>
            </Container>
            <ClassroomActivityPanel />
          </AuthenticatedLayout>
        ];
  }
}

export default withData(ChatroomPage);
