import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Button } from "../Button";
import Card from "../Card";

const ClassroomPreviewWrapper = Card.extend`
  text-align: center;
  max-width: 800px;
  margin-top: 1.5em;
  margin-bottom: 3em;
  padding: 4em 3em;
`;

const PrimaryInfoItem = styled.div`
  margin-bottom: 2em;
`;

const Topic = styled.h2`
  font-weight: 400;
  color: ${p => p.theme.PRIMARY_COLOR};
  font-size: 1.6em;
`;

const Info = styled.h1`
  color: #777;
  font-size: 1.8em;
  font-weight: 400;
`;

const TextInfo = styled.p`
  color: #777;
  margin: 0;
  font-size: 1.1em;
`;

/**
 * @name ClassroomPreview
 * @desc Show a short information about a classroom if user is not a member of it, instead of showing the classroom timeline
 * @prop classroomID : ID of the classroom. use this to determine which classroom to query from API
 */
const ClassroomPreview = ({
  classroomID,
  subject,
  instructor,
  description
}) => (
  <ClassroomPreviewWrapper>
    <PrimaryInfoItem>
      <Topic>วิชาที่สอน</Topic>
      <Info>{subject}</Info>
    </PrimaryInfoItem>
    <PrimaryInfoItem>
      <Topic>ผู้สอน</Topic>
      <Info>{instructor}</Info>
    </PrimaryInfoItem>
    <PrimaryInfoItem>
      <Topic>คำอธิบาย</Topic>
      <TextInfo>{description}</TextInfo>
    </PrimaryInfoItem>
    <Button primary>ส่งคำขอเข้าห้องเรียนนี้</Button>
  </ClassroomPreviewWrapper>
);

ClassroomPreview.propTypes = {
  classroomID: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ClassroomPreview;
