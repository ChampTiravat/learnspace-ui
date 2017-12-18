import React from "react";
import PropTypes from "prop-types";

import ClassroomResult from "./SearchResultTypes/ClassroomResult";
import SearchResultGroup from "./SearchResultGroup";
import ResultTitle from "./ResultTitle";

/**
 * @name ClassroomResultGroup
 * @desc A Card component contents of classroom item associated to user's search query
 */
const ClassroomResultGroup = () => (
  <SearchResultGroup header="ห้องเรียน">
    <ClassroomResult>
      <ResultTitle>Introduction to Computer Science</ResultTitle>
    </ClassroomResult>
    <ClassroomResult>
      <ResultTitle>Intro to Computer Science</ResultTitle>
    </ClassroomResult>
    <ClassroomResult>
      <ResultTitle>Introduction to Computer Engineering</ResultTitle>
    </ClassroomResult>
    <ClassroomResult>
      <ResultTitle>Introduction to Computer Science</ResultTitle>
    </ClassroomResult>
    <ClassroomResult>
      <ResultTitle>Introduction to Computer Management</ResultTitle>
    </ClassroomResult>
    <ClassroomResult>
      <ResultTitle>Introduction to Computer Science</ResultTitle>
    </ClassroomResult>
    <ClassroomResult>
      <ResultTitle>Introduction to Computer Science</ResultTitle>
    </ClassroomResult>
    <ClassroomResult>
      <ResultTitle>Introduction to Computer Science</ResultTitle>
    </ClassroomResult>
  </SearchResultGroup>
);

export default ClassroomResultGroup;
