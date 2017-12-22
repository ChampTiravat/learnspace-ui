import styled from "styled-components";

/**
 * @name Heading
 * @desc Display a heading text, used to remind readers the topic which thay are currently reading
 */
const SubHeading = styled.h1`
  color: ${p => p.theme.PRIMARY_COLOR};
  font-size: 1.3em;
  font-weight: 400;
  display: block;
  text-align: left;
  margin-top: 1em;
`;

export default SubHeading;
