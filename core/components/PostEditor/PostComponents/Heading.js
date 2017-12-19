import React from "react";

import Card, { Body, Footer } from "../../Card";
import { Form, Input, InputLabel } from "../../Form";
import { SuccessButton, DangerButton } from "../../Button";

/**
 * @name Heading
 * @desc Display a heading text, used to remind readers the topic which thay are currently reading
 */
const Heading = () => (
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

export default Heading;
