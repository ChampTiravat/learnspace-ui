import React from "react";
import PropTypes from "prop-types";

import FullContainerCard from "../FullContainerCard";
import UserResult from "../SearchPage/SearchResultTypes/UserResult";
import ResultTitle from "../SearchPage/ResultTitle";

/**
 * @name JoinRequestPanel
 * @desc Based component for result group
 * @prop header : a text to describe or naming the group of the containing results
 * @prop children : A search results
 */
const JoinRequestPanel = () => (
  <FullContainerCard header="ผู้ใช้งาน">
    <UserResult>
      <ResultTitle>Tony Stark</ResultTitle>
    </UserResult>
    <UserResult>
      <ResultTitle>Tony Stark</ResultTitle>
    </UserResult>
    <UserResult>
      <ResultTitle>Tony Stark</ResultTitle>
    </UserResult>
    <UserResult>
      <ResultTitle>Tony Stark</ResultTitle>
    </UserResult>
    <UserResult>
      <ResultTitle>Tony Stark</ResultTitle>
    </UserResult>
    <UserResult>
      <ResultTitle>Tony Stark</ResultTitle>
    </UserResult>
    <UserResult>
      <ResultTitle>Tony Stark</ResultTitle>
    </UserResult>
  </FullContainerCard>
);

export default JoinRequestPanel;
