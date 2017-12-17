import React from "react";
import PropTypes from "prop-types";

import FullContainerCard from "../FullContainerCard";
import UserRequestItem from "./UserRequestItem";
import UserTitle from "./UserTitle";

/**
 * @name JoinRequestPanel
 * @desc A Card component, displaying a user who already sent a join request to a particular classroom
 */
const JoinRequestPanel = () => (
  <FullContainerCard marginTop="2em" marginBottom="7em" header="คำขอเข้าร่วม">
    {[0, 0, 0, 0, 0, 0, 0, 0].map(e => (
      <UserRequestItem key={(e += 1)}>
        <UserTitle>Tony Stark</UserTitle>
      </UserRequestItem>
    ))}
  </FullContainerCard>
);

export default JoinRequestPanel;
