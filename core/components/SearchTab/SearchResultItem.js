import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 *  @name SearchResultItemWrapper
 *  @desc Wrap Profile picture and the name of a particular search result
 *  @param show : the state of navbar search result panel apearence
 */
const SearchResultItemWrapper = styled.div`
  padding: 1em 0;
  color: ${p => p.theme.PRIMARY_COLOR};
  font-weight: 400;
  font-size: 1.2em;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

/**
 *  @name SearchResultProfilePic
 *  @desc Display the profile picture of the search result(s)
 *  @param show : the state of navbar search result panel apearence
 */
const SearchResultProfilePic = styled.div`
  padding: 1.2em;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #c8c8c8;
  display: inline-block;
  float: left;
  margin-top: 0;
  margin-bottom: 1em;
  margin-right: 1em;
`;

/**
 *  @name SearchResultPanel
 *  @desc Render to single search item
 *  @param show : the state of navbar search result panel apearence
 */
const SearchResultItem = ({ name }) => (
  <SearchResultItemWrapper>
    <SearchResultProfilePic />
    {name}
  </SearchResultItemWrapper>
);

SearchResultItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default SearchResultItem;
