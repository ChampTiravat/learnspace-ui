import React from "react";
import withForm from "redux-form";
import styled from "styled-components";

import Card, { Header, Body } from "./Card";
import { PrimaryButton } from "./Button";
import { Form, TextArea } from "./Form";

const CommentMessageBox = () => (
  <Form>
    <TextArea style={{ marginBottom: "1em", width: "100%", height: "100px" }} />
    <PrimaryButton>ส่ง</PrimaryButton>
  </Form>
);

export default CommentMessageBox;
