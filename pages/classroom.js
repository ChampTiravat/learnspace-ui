import React from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

import ClassroomActivityPanel from "../core/components/ClassroomPage/ClassroomActivityPanel";
import ClassroomHeaderPanel from "../core/components/ClassroomPage/ClassroomHeaderPanel";
import ClassroomInfoPanel from "../core/components/ClassroomPage/ClassroomInfoPanel";
import ClassroomPreview from "../core/components/ClassroomPage/ClassroomPreview";
import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import ClassroomsList from "../core/components/ClassroomsList";
import Container from "../core/components/Container";
import PostsList from "../core/components/PostsList";
import Panel from "../core/components/Panel";
import withData from "../core/withData";

class ClassroomPage extends React.Component {
  state = {
    isMember: 1
  };

  static async getInitialProps({ query: { id } }) {
    return { classId: id, classroomName: "Introduction to Computer Science" };
  }

  componentDidMount = () => console.log(this.props.classId);

  render() {
    const { isMember } = this.state;
    return !isMember
      ? [
          <Head>
            <title>{this.props.classroomName} | LEARNSPACE</title>
          </Head>,
          <AuthenticatedLayout>
            <ClassroomHeaderPanel classroomName={this.props.classroomName} />
            <Container marginTop="10em">
              <ClassroomPreview />
            </Container>
          </AuthenticatedLayout>
        ]
      : [
          <Head>
            <title>{this.props.classroomName} | LEARNSPACE</title>
          </Head>,
          <AuthenticatedLayout>
            <ClassroomHeaderPanel classroomName={this.props.classroomName} />
            <Container marginTop="10em">
              <Panel left width="40">
                <ClassroomInfoPanel />
              </Panel>
              <Panel right height="850px" width="60">
                <PostsList height="700px" />
              </Panel>
              <ClassroomActivityPanel />
            </Container>
          </AuthenticatedLayout>
        ];
  }
}

export default withData(ClassroomPage);
