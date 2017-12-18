import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { connect } from "react-redux";

import PostRemovalConfirmationModal from "../core/components/PostPage/PostRemovalConfirmationModal";
import CommentMessageBoxCard from "../core/components/PostPage/CommentMessageBoxCard";
import { showPostRemovalConfirmationModal } from "../core/actions/post-page-actions";
import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import { PrimaryButton, LightButton } from "../core/components/Button";
import PostCommentsPanel from "../core/components/PostCommentsPanel";
import CommentMessageBox from "../core/components/CommentMessageBox";
import Card, { Header, Body, Footer } from "../core/components/Card";
import ActivityPanel from "../core/components/ActivityPanel";
import PostContent from "../core/components/PostContent";
import Container from "../core/components/Container";
import withData from "../core/withData";
import ClassroomHeaderPanel from "../core/components/ClassroomPage/ClassroomHeaderPanel";

class PostPage extends React.Component {
  static async getInitialProps() {
    return {
      classroomID: "1",
      classroomName: "Introduction to Computer Science"
    };
  }

  render() {
    const { showPostRMModal, classroomID, classroomName } = this.props;
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
          <CommentMessageBoxCard>
            <Header>แสดงความคิดเห็นของคุณ</Header>
            <Body>
              <CommentMessageBox />
            </Body>
          </CommentMessageBoxCard>
          <ActivityPanel>
            <Link>
              <a>แก้ไขเนื้อหาโพส</a>
            </Link>
            <a onClick={() => showPostRMModal()}>ลบโพส</a>
          </ActivityPanel>
          <PostRemovalConfirmationModal />
        </Container>
      </AuthenticatedLayout>
    ];
  }
}

const mapDispatchToProps = dispatch => ({
  showPostRMModal: () => dispatch(showPostRemovalConfirmationModal())
});

export default withData(connect(null, mapDispatchToProps)(PostPage));
