import React from "react";
import PropTypes from "prop-types";

import Card, { Header, Body } from "../Card";

/**
 * @name SearchResultGroup
 * @desc Based component for result group
 * @prop header : a text to describe or naming the group of the containing results
 * @prop children : A search results
 */
const SearchResultGroup = ({ children, header }) => (
  <Card fluidWidth marginBottom="3em">
    <Header>{header}</Header>
    <Body
      height="590px"
      style={{
        textAlign: "center"
      }}
    >
      {children}
    </Body>
  </Card>
);

SearchResultGroup.propTypes = {
  header: PropTypes.string.isRequired
};

export default SearchResultGroup;
