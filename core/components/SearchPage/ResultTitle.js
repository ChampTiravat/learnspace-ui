import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Title = styled.h2`
  color: ${p => p.theme.primaryColor};
  font-size: 1.2em;
  font-weight: 500;
  text-align: center;
`;

/**
 * @name ResultTitle
 * @desc Display the title of a particular seach result with a limited string length
 * @prop children : a string title of a search result
 */
const ResultTitle = ({ children }) => (
  <Title>
    {/* Cut-off the string if it longer than 30 characters */}
    {children.substr(0, 30)}
    {/* if the string has more than 27 charactoers, replace the last 3 with "..."  */}
    {children.length > 27 ? "..." : null}
  </Title>
);

ResultTitle.propTypes = {
  children: PropTypes.string.isRequired
};

export default ResultTitle;
