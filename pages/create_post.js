import React from "react";

import CreateClassroomCard from "../core/components/CreateClassroomPage/CreateClassroomCard";
import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import Card, { Header, Body, Footer } from "../core/components/Card";
import NavigationBar from "../core/components/NavigationBar";
import Wallpaper from "../core/components/Wallpaper";
import Container from "../core/components/Container";
import Panel from "../core/components/Panel";
import withData from "../core/withData";
import {
  PrimaryButton,
  SuccessButton,
  DangerButton
} from "../core/components/Button";
import {
  Form,
  Input,
  TextArea,
  InputLabel,
  InputGroup
} from "../core/components/Form";

const SetPostTitleCard = () => (
  <Card fluidWidth padding="1em" marginBottom="1.5em">
    <Form>
      <InputGroup>
        <InputLabel>ชื่อโพส</InputLabel>
        <Input type="text" />
      </InputGroup>
    </Form>
  </Card>
);

const PostImage = () => (
  <Card fluidWidth marginBottom="2em">
    <Body>
      <div
        style={{
          height: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ddd"
        }}
      >
        <PrimaryButton>เลือกรูปภาพ</PrimaryButton>
      </div>
    </Body>
    <Footer>
      <SuccessButton marginRight="0.5em">เสร็จสิ้น</SuccessButton>
      <DangerButton>ยกเลิก</DangerButton>
    </Footer>
  </Card>
);

const PostHeading = () => (
  <Card fluidWidth marginBottom="2em">
    <Body>
      <Form>
        <InputLabel>หัวข้อเรื่อง</InputLabel>
        <Input type="text" />
      </Form>
    </Body>
    <Footer>
      <SuccessButton marginRight="0.5em">เสร็จสิ้น</SuccessButton>
      <DangerButton>ยกเลิก</DangerButton>
    </Footer>
  </Card>
);

const EditProfilePage = () => (
  <AuthenticatedLayout>
    <NavigationBar isLoggedIn={true} />
    <Container transparent>
      <Panel left width="70" paddingRight="1.5em">
        <SetPostTitleCard />
        <Card fluidWidth padding="2em" marginBottom="4em">
          {/* {} */}
          <PostHeading />
          <PostImage />
          <PostHeading />
          <PostHeading />
        </Card>
      </Panel>
      <Panel right width="30">
        <Card style={{ position: "fixed", maxWidth: "400px" }}>
          <Header>เลือกส่วนประกอบที่ต้องการ</Header>
          <Body height="470px">{/* {} */}</Body>
          <Footer>
            <PrimaryButton textCenter fluidWidth marginBottom="0.5em">
              เสร็จสิ้น
            </PrimaryButton>
            <DangerButton textCenter fluidWidth>
              ยกเลิก
            </DangerButton>
          </Footer>
        </Card>
      </Panel>
    </Container>
  </AuthenticatedLayout>
);

export default withData(EditProfilePage);
