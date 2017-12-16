import React from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

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
  ClassroomCourseInfoHeading,
  CourseOutline,
  CourseOutlineItem,
  ClassroomBreifInfo,
  ClassroomPanelButtonsGroup
} from "../core/components/ClassroomPage";
import {
  CREATE_POST_PAGE,
  EDIT_CLASSROOM_PAGE,
  CLASSROOM_CHATROOM_PAGE
} from "../core/constants/endpoints/ui";

class ClassroomPage extends React.Component {
  state = {
    isMember: true
  };

  static async getInitialProps({ query: { id } }) {
    return { classId: id, className: "Introduction to Computer Science" };
  }

  componentDidMount = () => console.log(this.props.classId);

  render() {
    const { isMember } = this.state;
    return !isMember
      ? [
          <Head>
            <title>{this.props.className} | LEARNSPACE</title>
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
              <ClassroomPreview />
            </Container>
          </AuthenticatedLayout>
        ]
      : [
          <Head>
            <title>{this.props.className} | LEARNSPACE</title>
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
              <Panel left width="40">
                <ProfileInfoPanel>
                  <ClassroomCourseInfoContainer>
                    <ClassroomCourseInfoHeading>
                      รายละเอียดหลักสูตร
                    </ClassroomCourseInfoHeading>
                    <CourseOutline>
                      <CourseOutlineItem>
                        Explain course outline
                      </CourseOutlineItem>
                      <CourseOutlineItem>
                        Calculus and Analytic Geometry
                      </CourseOutlineItem>
                      <CourseOutlineItem>
                        Getting started with Python programming
                      </CourseOutlineItem>
                      <CourseOutlineItem>
                        Data Structures and Algorithms
                      </CourseOutlineItem>
                      <CourseOutlineItem>Final Project</CourseOutlineItem>
                      <CourseOutlineItem>Examination</CourseOutlineItem>
                    </CourseOutline>
                  </ClassroomCourseInfoContainer>
                  <ClassroomPanelButtonsGroup>
                    <Link href={CLASSROOM_CHATROOM_PAGE} prefetch>
                      <PrimaryButton>ห้องแชท</PrimaryButton>
                    </Link>
                  </ClassroomPanelButtonsGroup>
                </ProfileInfoPanel>
              </Panel>
              <Panel right style={{ height: "850px" }} width="60">
                <PostsList height="700px" />
              </Panel>
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

export default withData(ClassroomPage);
