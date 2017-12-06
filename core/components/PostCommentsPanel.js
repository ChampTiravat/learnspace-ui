import React from "react";
import styled from "styled-components";

import Card, { Header, Body, Footer } from "./Card";
import { PrimaryButton } from "./Button";

const CommentPanelCard = Card.extend`
  height: 750px;
  padding-bottom: 2em;
`;

const CommentCreatorPic = styled.img`
  display: inline-block;
  float: left;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background-color: #ccc;
  margin-top: 0.5em;
  margin-right: 1.5em;
`;

const CommentInfo = styled.div`
  padding-left: 5em;
`;

const CreatorName = styled.h4`
  color: ${p => p.theme.primaryColor};
  font-weight: 500;
  font-size: 1.1em;
  margin-bottom: 0;
`;
const CommentBody = styled.p`
  margin: 0;
  color: #777;
  font-size: 1em;
`;
const ReplyButton = styled.button`
  color: ${p => p.theme.primaryColor};
  background: transparent;
  border: none;
  font-size: 0.9em;
  margin-top: 0.3em;
  cursor: pointer;
`;

const CommentCard = Card.extend`
  box-shadow: none;
  padding: 1em 1em 1.8em 1em;
`;

const CommentItem = ({ creator, content }) => (
  <CommentCard>
    <CommentCreatorPic />
    <CommentInfo>
      <CreatorName>{creator}</CreatorName>
      <CommentBody>{content}</CommentBody>
      <ReplyButton>ตอบกลับ</ReplyButton>
    </CommentInfo>
  </CommentCard>
);

const PostCommentsPanel = () => (
  <CommentPanelCard>
    <Header>ความคิดเห็น</Header>
    <Body overflowY="scroll" height="650px">
      <CommentItem
        creator="Tony Stark"
        content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
      />
      <CommentItem
        creator="Steve Rogers"
        content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
      />
      <CommentItem
        creator="Chris Evans"
        content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
      />

      <CommentItem
        creator="Tony Stark"
        content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
      />
      <CommentItem
        creator="Chris Evans"
        content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
      />
    </Body>
  </CommentPanelCard>
);

export default PostCommentsPanel;
