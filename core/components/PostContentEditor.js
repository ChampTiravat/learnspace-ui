import React from "react";
import styled from "styled-components";

import { Form, Input, TextArea, InputLabel, InputGroup } from "./Form";
import Card, { Header, Body, Footer } from "./Card";
import {
  LightButton,
  PrimaryButton,
  SuccessButton,
  DangerButton
} from "./Button";

const PostTitleCard = () => (
  <Card fluidWidth padding="1em" marginBottom="1.5em">
    <Form>
      <InputGroup>
        <InputLabel>ชื่อโพส</InputLabel>
        <Input type="text" />
      </InputGroup>
    </Form>
  </Card>
);

const PostDragableField = styled.div`
  width: 100%;
  height: 200px;
  background-color: transparent;
  border: 2px dashed ${p => p.theme.primaryColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    color: ${p => p.theme.primaryColor};
    font-weight: 400;
    font-size: 1.5em;
  }
`;

const PostMap = () => (
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
        Map
      </div>
    </Body>
    <Footer>
      <SuccessButton marginRight="0.5em">เสร็จสิ้น</SuccessButton>
      <DangerButton>ยกเลิก</DangerButton>
    </Footer>
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
        <LightButton>เลือกรูปภาพ</LightButton>
      </div>
    </Body>
    <Footer>
      <SuccessButton marginRight="0.5em">เสร็จสิ้น</SuccessButton>
      <DangerButton>ยกเลิก</DangerButton>
    </Footer>
  </Card>
);

const PostSlideShow = () => (
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
        <LightButton>เลือกรูปภาพ</LightButton>
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

const PostTable = () => (
  <Card fluidWidth marginBottom="2em">
    <Body>
      <table>
        <tbody>
          <tr>
            <td>first name</td>
            <td>last name</td>
            <td>age</td>
          </tr>
          <tr>
            <td>Tony</td>
            <td>Stark</td>
            <td>35</td>
          </tr>
          <tr>
            <td>Tony</td>
            <td>Stark</td>
            <td>35</td>
          </tr>
          <tr>
            <td>Tony</td>
            <td>Stark</td>
            <td>35</td>
          </tr>
        </tbody>
      </table>
    </Body>
    <Footer>
      <SuccessButton marginRight="0.5em">เสร็จสิ้น</SuccessButton>
      <DangerButton>ยกเลิก</DangerButton>
    </Footer>
  </Card>
);

class PostContentEditor extends React.Component {
  onDrop = files => {
    console.log(files[0]);
  };

  render() {
    return (
      <div>
        <PostTitleCard />
        <Card fluidWidth padding="2em" marginBottom="4em">
          <PostHeading />
          <PostImage />
          <PostTable />
          <PostMap />
          <PostSlideShow />
          <PostDragableField>
            <h3>เพิ่มส่วนประกอบ</h3>
          </PostDragableField>
        </Card>
      </div>
    );
  }
}

export default PostContentEditor;
