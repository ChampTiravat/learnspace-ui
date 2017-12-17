import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Card from "../Card";

const ClassroomHeaderCard = Card.extend`
  position: absolute;
  left: 0;
  max-width: 100%;
  padding: 2em;
  text-align: center;
`;

const ClassroomNameHeading = styled.h1`
  color: ${p => p.theme.primaryColor};
  font-size: 1.7em;
  font-weight: 400;
`;

const Seperator = styled.div`
  width: 30%;
  height: 2px;
  background-color: ${p => p.theme.primaryColor};
  margin: 1em auto;
`;

const ClassroomBreifInfo = styled.p`
  color: #777;
  font-size: 1.1em;
  font-weight: 300;
  span {
    color: ${p => p.theme.primaryColor};
    font-weight: 400;
  }
`;

/**
 * @name ClassroomHeaderPanel
 * @desc Display the details of the classroom
 * @prop classroomID : ID of the classroom, used to determine which classroom to query from DB
 * @prop classroomName : Name of the classroom
 */
const ClassroomHeaderPanel = ({ classroomID, classroomName }) => (
  <ClassroomHeaderCard>
    <ClassroomNameHeading>{classroomName}</ClassroomNameHeading>
    <Seperator />
    <ClassroomBreifInfo>
      จำนวนสมาชิก <span>30</span> โพสทั้งหมด <span>10</span> การบ้าน{" "}
      <span>5</span> การสอบ <span>2</span>
    </ClassroomBreifInfo>
  </ClassroomHeaderCard>
);

ClassroomHeaderPanel.propTypes = {
  classroomID: PropTypes.string.isRequired,
  classroomName: PropTypes.string.isRequired
};

export default ClassroomHeaderPanel;
