import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Card from "./Card";

const ClassroomListItemWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 2em;
  padding-left: 4em;
  text-align: center;
  cursor: pointer;
`;

const ClassroomListItemCard = Card.extend`
  margin-bottom: 1em;
  margin-left: 0;
  padding: 4em;
  max-width: 650px;
`;

const ClassroomListItemLabel = styled.div`
  width: 470px;
  text-align: center;
  h3 {
    color: ${p => p.theme.PRIMARY_COLOR};
    font-weight: 400;
    font-size: 1.3em;
    margin-bottom: 0.5em;
  }
  p {
    color: #777;
    font-weight: 300;
    font-size: 1.1em;
    margin: 0;
    margin-top: 0;
  }
`;

const ClassroomsListWrapper = styled.div`
  height: ${p => p.height || "600px"};
  margin-top: 1.5em;
  overflow-y: scroll;
`;

const ClassroomListItem = ({ name, desc }) => (
  <Link href="/post" prefetch>
    <ClassroomListItemWrapper>
      <ClassroomListItemCard>
        <ClassroomListItemLabel>
          <h3>{name}</h3>
          <p>{desc}</p>
        </ClassroomListItemLabel>
      </ClassroomListItemCard>
    </ClassroomListItemWrapper>
  </Link>
);

const PostsList = ({ height }) => (
  <ClassroomsListWrapper height={height}>
    <ClassroomListItem
      name="# Introduction to Artificial Inteligence"
      desc="ฟหกฟหกฟหกฟหกสาฟนดาำๆนาดำ่ดพไรำ่ดนาฟนกฟยกสๆไยสกยฟสกยสฟก"
    />
    <ClassroomListItem
      name="# Introduction to AI"
      desc="ฟหกฟหกฟหกฟหกสาฟนดาำๆนาดำ่ดพไรำ่ดนาฟนกฟยกสๆไยสกยฟสกยสฟก"
    />
    <ClassroomListItem
      name="# Introduction to AI"
      desc="ฟหกฟหกฟหกฟหกสาฟนดาำๆนาดำ่ดพไรำ่ดนาฟนกฟยกสๆไยสกยฟสกยสฟก"
    />
    <ClassroomListItem
      name="# Introduction to AI"
      desc="ฟหกฟหกฟหกฟหกสาฟนดาำๆนาดำ่ดพไรำ่ดนาฟนกฟยกสๆไยสกยฟสกยสฟก"
    />
  </ClassroomsListWrapper>
);

export default PostsList;
