import React from "react";
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import styled from "styled-components";

import ClassroomMemberPanel from "../core/components/ClassroomMemberPage/ClassroomMemberPanel";
import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import ProfileInfoPanel from "../core/components/ProfileInfoPanel";
import ClassroomPreview from "../core/components/ClassroomPreview";
import ClassroomsList from "../core/components/ClassroomsList";
import Card, { Header, Body } from "../core/components/Card";
import ActivityPanel from "../core/components/ActivityPanel";
import { PrimaryButton } from "../core/components/Button";
import Container from "../core/components/Container";
import PostsList from "../core/components/PostsList";
import Panel from "../core/components/Panel";
import withData from "../core/withData";
import {
  ClassroomHeaderPanel,
  ClassroomNameHeading,
  Seperator,
  ClassroomCourseInfoContainer,
  ClassroomBreifInfo
} from "../core/components/ClassroomPage";
import {
  CREATE_POST_PAGE,
  EDIT_CLASSROOM_PAGE,
  CLASSROOM_CHATROOM_PAGE,
  CLASSROOM_PAGE
} from "../core/constants/endpoints/ui";

class ClassroomMemberPage extends React.Component {
  state = {
    isMember: 1
  };

  static async getInitialProps({ query: { id } }) {
    return { classId: id, className: "Introduction to Computer Science" };
  }

  componentDidMount() {
    console.log(this.props.classId);
  }

  render() {
    const { isMember } = this.state;
    return !isMember
      ? Router.push(CLASSROOM_PAGE)
      : [
          <Head>
            <title>สมาชิก - {this.props.className} | LEARNSPACE</title>
          </Head>,
          <AuthenticatedLayout>
            <ClassroomHeaderPanel>
              <ClassroomNameHeading>
                {this.props.className}
              </ClassroomNameHeading>
              <Seperator />
              <ClassroomBreifInfo>
                จำนวนสมาชิก <span>30</span> โพสทั้งหมด <span>10</span> การบ้าน{" "}
                <span>5</span> การสอบ <span>2</span>
              </ClassroomBreifInfo>
            </ClassroomHeaderPanel>
            <Container style={{ marginTop: "10em" }}>
              <ClassroomMemberPanel />
              <ActivityPanel>
                <Link href={CREATE_POST_PAGE} prefetch>
                  <a>สร้างโพสใหม่</a>
                </Link>
                <Link>
                  <a>เพิ่มการสอบ</a>
                </Link>
                <Link href={EDIT_CLASSROOM_PAGE} prefetch>
                  <a>แก้ไขข้อมูลห้องเรียน</a>
                </Link>
                <Link>
                  <a>สมาชิก</a>
                </Link>
                <Link>
                  <a>คำขอเข้าร่วม</a>
                </Link>
              </ActivityPanel>
            </Container>
          </AuthenticatedLayout>
        ];
  }
}

export default withData(ClassroomMemberPage);
