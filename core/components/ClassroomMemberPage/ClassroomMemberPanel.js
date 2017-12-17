import React from "react";
import PropTypes from "prop-types";

import FullContainerCard from "../FullContainerCard";
import MemberItem from "./MemberItem";
import UserTitle from "./UserTitle";

/**
 * @name ClassroomMemberPanel
 * @desc A Card component, displaying a classroom members
 */
const ClassroomMemberPanel = () => (
  <FullContainerCard header="สมาชิก" marginTop="2em" marginBottom="7em">
    {[0, 0, 0, 0, 0, 0, 0, 0].map(e => (
      <MemberItem key={(e += 1)}>
        <UserTitle>Tony Stark</UserTitle>
      </MemberItem>
    ))}
  </FullContainerCard>
);

export default ClassroomMemberPanel;
