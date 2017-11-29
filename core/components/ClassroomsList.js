import React from "react";
import styled from "styled-components";

import Card from "./Card";
import ClassroomProfilePic from "./ClassroomProfilePic";

const ClassroomListItemWrapper = styled.div`
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 2em;
  padding-left: 4em;
  text-align: center;
`;

const ClassroomListItemCard = Card.extend`
  margin-bottom: 1em;
  margin-left: 0;
  padding: 4em;
  max-width: 650px;
`;

const ClassroomListItemLabel = styled.div`
  width: 470px;
  h3 {
    color: ${p => p.theme.primaryColor};
    font-weight: 400;
    font-size: 1.3em;
    margin-bottom: 1em;
  }
  p {
    color: #777;
    font-weight: 300;
    font-size: 1.1em;
    margin: 0;
  }
`;

const ClassroomListItem = ({ name, desc }) => (
  <ClassroomListItemWrapper>
    <ClassroomListItemCard>
      <ClassroomListItemLabel>
        <h3>{name}</h3>
        <p>{desc}</p>
      </ClassroomListItemLabel>
      <ClassroomProfilePic />
    </ClassroomListItemCard>
  </ClassroomListItemWrapper>
);

const ClassroomsList = () => (
  <div
    style={{
      marginTop: "1.5em",
      overflowY: "scroll",
      height: "500px"
    }}
  >
    <ClassroomListItem
      name="Introduction to Artificial Inteligence"
      desc="ฟหกฟหกฟหกฟหกสาฟนดาำๆนาดำ่ดพไรำ่ดนาฟนกฟยกสๆไยสกยฟสกยสฟก"
    />
    <ClassroomListItem
      name="Introduction to AI"
      desc="ฟหกฟหกฟหกฟหกสาฟนดาำๆนาดำ่ดพไรำ่ดนาฟนกฟยกสๆไยสกยฟสกยสฟก"
    />
    <ClassroomListItem
      name="Introduction to AI"
      desc="ฟหกฟหกฟหกฟหกสาฟนดาำๆนาดำ่ดพไรำ่ดนาฟนกฟยกสๆไยสกยฟสกยสฟก"
    />
    <ClassroomListItem
      name="Introduction to AI"
      desc="ฟหกฟหกฟหกฟหกสาฟนดาำๆนาดำ่ดพไรำ่ดนาฟนกฟยกสๆไยสกยฟสกยสฟก"
    />
  </div>
);

export default ClassroomsList;
