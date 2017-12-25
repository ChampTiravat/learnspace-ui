import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Title = styled.h2`
  color: ${p => p.theme.PRIMARY_COLOR};
  font-size: 1.2em;
  font-weight: 500;
  text-align: center;
`;

/**
 * @name UserTitle
 * @desc Display string with a limited string length
 * @prop children : a string title of a search result
 */
const UserTitle = ({ children }) => (
  <Title>
    {/* Cut-off the string if it longer than 30 characters */}
    {children.substr(0, 30)}
    {/* if the string has more than 27 charactoers, replace the last 3 with "..."  */}
    {children.length > 27 ? "..." : null}
  </Title>
);

UserTitle.propTypes = {
  children: PropTypes.string.isRequired
};

export default UserTitle;
