import React from "react";
import withForm from "redux-form";
import styled from "styled-components";

import CommentMessageBoxForm from "./CommentMessageBoxForm";
import Card, { Header, Body } from "../Card";

const CommentMessageBoxCard = Card.extend`
  max-width: 900px;
  margin-bottom: 6em;
`;

const CommentMessageBox = () => (
  <CommentMessageBoxCard>
    <Header>แสดงความคิดเห็นของคุณ</Header>
    <Body>
      <CommentMessageBoxForm />
    </Body>
  </CommentMessageBoxCard>
);

export default CommentMessageBox;
