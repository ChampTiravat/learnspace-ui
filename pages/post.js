import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { connect } from "react-redux";

import PostRemovalConfirmationModal from "../core/components/PostPage/PostRemovalConfirmationModal";
import ClassroomHeaderPanel from "../core/components/ClassroomPage/ClassroomHeaderPanel";
import CommentMessageBox from "../core/components/PostPage/CommentMessageBox";
import PostActivityPanel from "../core/components/PostPage/PostActivityPanel";
import PostCommentsPanel from "../core/components/PostPage/PostCommentsPanel";
import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import PostContent from "../core/components/PostContent";
import Container from "../core/components/Container";
import withData from "../core/withData";

class PostPage extends React.Component {
  static async getInitialProps() {
    return {
      classroomID: "1",
      classroomName: "Introduction to Computer Science"
    };
  }

  render() {
    const { classroomID, classroomName } = this.props;
    return [
      <Head>
        <title>Introduction to Artificial Intelligence | LEARNSPACE</title>
      </Head>,
      <AuthenticatedLayout>
        <ClassroomHeaderPanel
          classroomID={classroomID}
          classroomName={classroomName}
        />
        <Container marginTop="11.5em">
          <PostContent />
          <PostCommentsPanel />
          <CommentMessageBox />
          <PostActivityPanel />
          <PostRemovalConfirmationModal />
        </Container>
      </AuthenticatedLayout>
    ];
  }
}

export default withData(PostPage);
