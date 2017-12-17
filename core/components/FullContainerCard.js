import React from "react";
import PropTypes from "prop-types";

import Card, { Header, Body, Footer } from "./Card";

/**
 * @name FullContainerCard
 * @desc Based component for result group
 * @prop header : a text to describe or naming the group of the containing results
 * @prop children : A search results
 */
const FullContainerCard = ({ children, header }) => (
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

FullContainerCard.propTypes = {
  header: PropTypes.string.isRequired
};

export default FullContainerCard;
