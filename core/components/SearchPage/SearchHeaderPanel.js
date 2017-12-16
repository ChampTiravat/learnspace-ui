import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ClassroomHeaderPanel, ClassroomNameHeading } from "../ClassroomPage";

const SearchHeaderPanelHeading = styled.h1`
  color: #777;
  font-size: 1.2em;
  font-weight: 400;
`;

/**
 * @name SearchHeaderPanel
 * @desc Showing the search query nad some other information about the search results
 * @prop searchQuery : User's search text query
 */
const SearchHeaderPanel = ({ searchQuery }) => (
  <ClassroomHeaderPanel>
    <SearchHeaderPanelHeading>ผลการค้นหาสำหรับ</SearchHeaderPanelHeading>
    <ClassroomNameHeading>"{searchQuery}"</ClassroomNameHeading>
  </ClassroomHeaderPanel>
);

SearchHeaderPanel.propTypes = {
  searchQuery: PropTypes.string
};

export default SearchHeaderPanel;
