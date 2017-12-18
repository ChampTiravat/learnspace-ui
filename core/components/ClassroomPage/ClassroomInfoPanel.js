import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";

import { CLASSROOM_CHATROOM_PAGE } from "../../constants/endpoints/ui";
import { PrimaryButton } from "../Button";
import Card from "../Card";

const ClassroomInfoPanelCard = Card.extend`
  margin: 1.5em auto 0 auto;
  height: 650px;
  max-width: 480px;
`;

const ClassroomProfileImage = styled.img`
  display: block;
  width: 100%;
  height: 250px;
  background-color: #cbcbcb;
`;

const ClassroomCourseInfoContainer = styled.div`
  width: 100%;
  padding: 3em 3em 1em 3em;
`;

const ClassroomCourseInfoHeading = styled.h2`
  color: ${p => p.theme.primaryColor};
  font-weight: 400;
`;

const CourseOutlineItem = styled.li`
  color: #777;
  font-size: 1.1em;
  font-weight: 300;
`;

const ClassroomPanelButtonsGroup = styled.div`
  text-align: center;
  margin: 1em auto;
`;

const CourseOutline = styled.ul``;

const ClassroomInfoPanelWrapper = ({ children }) => (
  <ClassroomInfoPanelCard>
    <ClassroomProfileImage />
    {children}
  </ClassroomInfoPanelCard>
);

/**
 * @name ClassroomInfoPanel
 * @desc Showing classroom information
 * @prop courseOutline : Course Events
 */
const ClassroomInfoPanel = ({
  courseOutline = [
    "Explain course outline",
    "Calculus and Analytic Geometry",
    "Getting started with Python programming",
    "Data Structures and Algorithms",
    "Final Project",
    "Examination"
  ]
}) => (
  <ClassroomInfoPanelWrapper>
    <ClassroomCourseInfoContainer>
      <ClassroomCourseInfoHeading>
        รายละเอียดหลักสูตร
      </ClassroomCourseInfoHeading>
      <CourseOutline>
        {courseOutline.map((event, i) => (
          <CourseOutlineItem key={i}>{event}</CourseOutlineItem>
        ))}
      </CourseOutline>
    </ClassroomCourseInfoContainer>
    <ClassroomPanelButtonsGroup>
      <Link href={CLASSROOM_CHATROOM_PAGE} prefetch>
        <PrimaryButton>ห้องแชท</PrimaryButton>
      </Link>
    </ClassroomPanelButtonsGroup>
  </ClassroomInfoPanelWrapper>
);

export default ClassroomInfoPanel;
