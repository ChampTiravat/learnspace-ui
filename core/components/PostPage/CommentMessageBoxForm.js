import React from "react";
import PropTypes from "prop-types";

import { Form, TextArea } from "../Form";
import { Button } from "../Button";

/**
 * @name CommentMessageForm
 * @desc A form to send a comment to a particular post
 */
const CommentMessageForm = () => (
  <Form>
    <TextArea style={{ marginBottom: "1em", width: "100%", height: "100px" }} />
    <Button primary textCenter fluidWidth>
      ส่ง
    </Button>
  </Form>
);

export default CommentMessageForm;
