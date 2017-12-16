import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import PostCommentsPanel from "../core/components/PostCommentsPanel";
import CommentMessageBox from "../core/components/CommentMessageBox";
import { CommentMessageBoxCard } from "../core/components/PostPage";
import Card, { Header, Body } from "../core/components/Card";
import NavigationBar from "../core/components/NavigationBar";
import ActivityPanel from "../core/components/ActivityPanel";
import PostContent from "../core/components/PostContent";
import Container from "../core/components/Container";
import withData from "../core/withData";
import {
  ClassroomHeaderPanel,
  ClassroomNameHeading,
  Seperator,
  ClassroomBreifInfo
} from "../core/components/ClassroomPage";

const PostPage = () => [
  <Head>
    <title>Introduction to Artificial Intelligence | LEARNSPACE</title>
  </Head>,
  <AuthenticatedLayout>
    <NavigationBar isLoggedIn={true} />
    <ClassroomHeaderPanel>
      <ClassroomNameHeading>Fundamental of Chemistry</ClassroomNameHeading>
      <Seperator />
      <ClassroomBreifInfo>
        จำนวนสมาชิก <span>30</span> โพสทั้งหมด <span>10</span> การบ้าน{" "}
        <span>5</span> การสอบ <span>2</span>
      </ClassroomBreifInfo>
    </ClassroomHeaderPanel>
    <Container style={{ marginTop: "11.5em" }}>
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
        <Link>
          <a>ลบโพส</a>
        </Link>
      </ActivityPanel>
    </Container>
  </AuthenticatedLayout>
];

export default withData(PostPage);
