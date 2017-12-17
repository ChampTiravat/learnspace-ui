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
  static async getInitialProps({ query: { id } }) {
    return {
      isMember: 1,
      classroomID: id,
      classroomName: "Introduction to Computer Science",
      subject: "วิทยาการคอมพิวเตอร์เบื้องต้น",
      instructor: "Alan Turing",
      description: `แนวความคิดของ ลูซิพปุส (Leucippus) และดิโมคริตุส (Democritus) ยังคง
        แพรหลายอยู ห  ลายสิบป สสารทั้งหลายประกอบดวยอนุภาคที่เล็กที่สุด
        จนกระทั่งตอมา
        วิทยาศาสตรไดเจริญกาวหนาขึ้นและเกิดทฤษฎีอะตอมขึ้นมาในป ค.ศ.1808
        จากแนวความคิด ของจอหน ดาลตัน ผูเสนอจุดเริ่มตนของเคมียุคใหม
        สมมติฐานเกี ย ่ วกับธรรมชาติของสสารท ดาลตัน ไดเสนอคือแบบจําลองอะตอม
        เปนที่ยอมรับและสนับสนุนจากนักวิทยาศาสตรในสมัย นั้น
        โดยทฤษฎีอะตอมของดาลตันไดกลาวไววา 1. สสารทุกชนิดประกอบดวยอะตอม
        ซึ่งเปนหนวยที่เล็กที่สุด ไมสามารถ แบงแยก ไมอาจสรางขึ้นหรือทําลายได
        2. ธาตุประกอบดวยอนุภาคที เ ่ รียกวาอะตอม อะตอมของธาตุชนิดเดียวกันม
        ลักษณะเหมือนกัน คือ มีมวล ขนาด และสมบัติทางเคมีเหมือนกัน
        และแตกตางจากอะตอม ของธาตุชนิดอื่น 3.
        สารประกอบเกิดจากการรวมตัวของอะตอมของธาตุตั้งแต 2 ชนิดขึ้นไป มา
        รวมตัวกันดวยสัดสวนอะตอมที่คงที่และเปนเลขจํานวนเต็มหรือเศษสวนอยางงาย
        4. การเกิดปฏิกิร ย ิ าเคมีเกี่ยวของกับการแยก การรวม และการจัดอะตอมใหม
        เทานั้น ไมมีการสรางหรือการสูญหายของอะตอม`
    };
  }

  render() {
    const {
      isMember,
      classroomName,
      classroomID,
      subject,
      description,
      instructor
    } = this.props;
    return !isMember
      ? [
          <Head>
            <title>{classroomName} | LEARNSPACE</title>
          </Head>,
          <AuthenticatedLayout>
            <ClassroomHeaderPanel
              classroomID={classroomID}
              classroomName={classroomName}
            />
            <Container marginTop="10em">
              <ClassroomPreview
                classroomID={classroomID}
                subject={subject}
                instructor={instructor}
                description={description}
              />
            </Container>
          </AuthenticatedLayout>
        ]
      : [
          <Head>
            <title>{classroomName} | LEARNSPACE</title>
          </Head>,
          <AuthenticatedLayout>
            <ClassroomHeaderPanel
              classroomID={classroomID}
              classroomName={classroomName}
            />
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
