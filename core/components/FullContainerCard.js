import React from "react";
import PropTypes from "prop-types";

import Card, { Header, Body, Footer } from "./Card";

/**
 * @name FullContainerCard
 * @desc A Card component with a full width
 */
const FullContainerCard = props => (
  <Card fluidWidth {...props}>
    <Header>{props.header}</Header>
    <Body
      height="590px"
      style={{
        textAlign: "center"
      }}
    >
      {props.children}
    </Body>
  </Card>
);

FullContainerCard.propTypes = {
  header: PropTypes.string.isRequired
};

export default FullContainerCard;
