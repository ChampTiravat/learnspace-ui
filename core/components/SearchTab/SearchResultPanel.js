import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SearchResultCard from "./SearchResultCard";
import SearchResultItem from "./SearchResultItem";

/**
 *  @name SearchResultPanel
 *  @desc Navbar search result panel to display the search results as a list of items
 *  @param show : the state of navbar search result panel apearence
 */
const SearchResultPanel = ({ show }) => (
  <SearchResultCard show={show}>
    <SearchResultItem name="Tony Stark" />
    <SearchResultItem name="Chris Redfield" />
    <SearchResultItem name="Introduction to Coputer Sci..." />
    <SearchResultItem name="Steve Rogers" />
    <SearchResultItem name="Calculus II" />
    <SearchResultItem name="Nick Fury" />
  </SearchResultCard>
);

SearchResultPanel.propTypes = {
  show: PropTypes.bool.isRequired
};

export default SearchResultPanel;
