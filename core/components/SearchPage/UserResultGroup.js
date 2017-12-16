import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import UserResult from "./SearchResultTypes/UserResult";
import SearchResultGroup from "./SearchResultGroup";
import ResultTitle from "./ResultTitle";

/**
 * @name UserResultGroup
 * @desc A Card component contents of user profile associated to user's search query
 */
const UserResultGroup = () => (
  <SearchResultGroup header="ผู้ใช้งาน">
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
  </SearchResultGroup>
);

export default UserResultGroup;
