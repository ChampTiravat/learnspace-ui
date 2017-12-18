import React from "react";
import Head from "next/head";
import Router from "next/router";

import ClassroomMemberPanel from "../core/components/ClassroomMemberPage/ClassroomMemberPanel";
import ClassroomActivityPanel from "../core/components/ClassroomPage/ClassroomActivityPanel";
import ClassroomHeaderPanel from "../core/components/ClassroomPage/ClassroomHeaderPanel";
import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import { CLASSROOM_PAGE } from "../core/constants/endpoints/ui";
import Container from "../core/components/Container";
import PostsList from "../core/components/PostsList";
import withData from "../core/withData";

class ClassroomMemberPage extends React.Component {
  static async getInitialProps({ query: { id } }) {
    return {
      isMember: 1,
      classroomID: id,
      classroomName: "Introduction to Computer Science"
    };
  }

  render() {
    const { isMember, classroomID, classroomName } = this.props;
    return !isMember
      ? Router.push(CLASSROOM_PAGE)
      : [
          <Head>
            <title>สมาชิก - {classroomName} | LEARNSPACE</title>
          </Head>,
          <AuthenticatedLayout>
            <ClassroomHeaderPanel
              classroomID={classroomID}
              classroomName={classroomName}
            />
            <Container marginTop="10em">
              <ClassroomMemberPanel />
              <ClassroomActivityPanel />
            </Container>
          </AuthenticatedLayout>
        ];
  }
}

export default withData(ClassroomMemberPage);
