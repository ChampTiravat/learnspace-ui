import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Card from "../Card";

const SearchHeaderPanelHeading = styled.h1`
  color: #777;
  font-size: 1.2em;
  font-weight: 400;
`;

const SearchHeaderPanelWrapper = Card.extend`
  position: absolute;
  left: 0;
  max-width: 100%;
  padding: 2em;
  text-align: center;
`;

const SearchQuery = styled.h1`
  color: ${p => p.theme.PRIMARY_COLOR};
  font-size: 1.7em;
  font-weight: 400;
  cursor: pointer;
`;

/**
 * @name SearchHeaderPanel
 * @desc Showing the search query nad some other information about the search results
 * @prop searchQuery : User's search text query
 */
const SearchHeaderPanel = ({ searchQuery }) => (
  <SearchHeaderPanelWrapper>
    <SearchHeaderPanelHeading>ผลการค้นหาสำหรับ</SearchHeaderPanelHeading>
    <SearchQuery>"{searchQuery}"</SearchQuery>
  </SearchHeaderPanelWrapper>
);

SearchHeaderPanel.propTypes = {
  searchQuery: PropTypes.string
};

export default SearchHeaderPanel;
