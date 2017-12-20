import React from "react";

import { Form, InputGroup, Input, InputLabel } from "../../Form";
import Card from "../../Card";

/**
 * @name SetPostTitleCard
 * @desc Set/change a post's title
 */
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

export default SetPostTitleCard;
