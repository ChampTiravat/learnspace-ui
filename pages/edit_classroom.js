import React from "react";
import Head from "next/head";
import Router from "next/router";

import ClassroomActivityPanel from "../core/components/ClassroomPage/ClassroomActivityPanel";
import ClassroomHeaderPanel from "../core/components/ClassroomPage/ClassroomHeaderPanel";
import EditClassroomCard from "../core/components/EditClassroomPage/EditClassroomCard";
import AuthenticatedLayout from "../core/components/Layout/AuthenticatedLayout";
import { CLASSROOM_PAGE } from "../core/constants/endpoints/ui";
import Container from "../core/components/Container";
import withData from "../core/withData";

class EditProfilePage extends React.Component {
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
            <title>แก้ไขรายละเอียด - {classroomName}</title>
          </Head>,
          <AuthenticatedLayout>
            <ClassroomHeaderPanel
              classroomID={classroomID}
              classroomName={classroomName}
            />
            <Container transparent marginTop="10em">
              <EditClassroomCard />
            </Container>
            <ClassroomActivityPanel />
          </AuthenticatedLayout>
        ];
  }
}

export default withData(EditProfilePage);
