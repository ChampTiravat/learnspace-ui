import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Card, { Header, Body, Footer } from "../Card";
import PostCommentItem from "./PostCommentItem";
import { PrimaryButton } from "../Button";

const SubCommentsWrapper = styled.ul`
  list-style: none;
  padding-left: 5em;
`;

const CommentPanelCard = Card.extend`
  max-width: 100%;
  width: 900px;
  height: 700px;
  padding-bottom: 4em;
  margin-bottom: 2em;
`;

/**
 * @name Comment
 * @desc Display user comment with it's sub-comment(s)
 * @prop creator : Comment's creator
 * @prop content : Comment message body
 */
const Comment = ({ creator, content }) => (
  <div>
    <PostCommentItem creator={creator} content={content} />
    <SubCommentsWrapper>
      <PostCommentItem isReply creator={creator} content={content} />
      <PostCommentItem isReply creator={creator} content={content} />
      <PostCommentItem isReply creator={creator} content={content} />
    </SubCommentsWrapper>
  </div>
);

Comment.propTypes = {
  creator: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

/**
 * @name PostCommentsPanel
 * @desc Display multiple comments of a particular post
 */
const PostCommentsPanel = () => (
  <CommentPanelCard>
    <Header>ความคิดเห็น</Header>
    <Body overflowY="scroll" height="600px">
      <Comment
        creator="Tony Stark"
        content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
      />
      <Comment
        creator="Steve Rogers"
        content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
      />
      <Comment
        creator="Chris Evans"
        content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
      />
      <Comment
        creator="Tony Stark"
        content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
      />
      <Comment
        creator="Chris Evans"
        content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
      />
    </Body>
  </CommentPanelCard>
);

export default PostCommentsPanel;
