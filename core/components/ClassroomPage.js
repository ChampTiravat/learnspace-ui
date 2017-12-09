import styled from "styled-components";

import Card from "./Card";

/**
 * @desc Components related in /classroom(pages/classroom.js)
 */

export const ClassroomHeaderPanel = Card.extend`
  position: absolute;
  left: 0;
  max-width: 100%;
  padding: 2em;
  text-align: center;
`;

export const ClassroomNameHeading = styled.h1`
  color: ${p => p.theme.primaryColor};
  font-size: 1.7em;
  font-weight: 400;
`;

export const Seperator = styled.div`
  width: 30%;
  height: 2px;
  background-color: ${p => p.theme.primaryColor};
  margin: 1em auto;
`;

export const ClassroomCourseInfoContainer = styled.div`
  width: 100%;
  padding: 3em 3em 1em 3em;
`;

export const ClassroomCourseInfoHeading = styled.h2`
  color: ${p => p.theme.primaryColor};
  font-weight: 400;
`;

export const CourseOutline = styled.ul``;

export const CourseOutlineItem = styled.li`
  color: #777;
  font-size: 1.1em;
  font-weight: 300;
`;

export const ClassroomBreifInfo = styled.p`
  color: #777;
  font-size: 1.1em;
  font-weight: 300;
  span {
    color: ${p => p.theme.primaryColor};
    font-weight: 400;
  }
`;

export const ClassroomPanelButtonsGroup = styled.div`
  text-align: center;
  margin: 1em auto;
`;
