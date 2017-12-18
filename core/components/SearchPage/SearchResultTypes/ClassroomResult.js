import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Card, { Header, Body, Footer } from "../../Card";

const ClassroomResultCard = Card.extend`
  margin-left: 1.5em;
  margin-right: 1.5em;
  margin-bottom: 1.5em;
  margin-top: 0;
  display: inline-block;
  max-width: 350px;
  box-shadow: none;
  cursor: pointer;
  transition: all 100ms ease-in;
  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-7px);
  }
`;

const ClassroomProfilePic = styled.img`
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  width: 100%;
  height: 200px;
  background-color: #ccc;
`;

/**
 * @name ClassroomResult
 * @desc Display a single classroom result which corresponding to user's search text query
 * @param children : Classroom information such as a title,name,date, whatever
 * @param profilePic : Profile picture of the classroom(will be replaced with default image if NULL passed)
 */
const ClassroomResult = ({ children, profilePic }) => (
  <ClassroomResultCard>
    <ClassroomProfilePic src={profilePic} />
    <Body>{children}</Body>
  </ClassroomResultCard>
);

ClassroomResult.propTypes = {
  profilePic: PropTypes.string.isRequired
};

export default ClassroomResult;
