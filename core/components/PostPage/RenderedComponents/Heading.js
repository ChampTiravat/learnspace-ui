import styled from "styled-components";

/**
 * @name Heading
 * @desc Display a heading text, used to remind readers the topic which thay are currently reading
 */
const Heading = styled.h1`
  color: ${p => p.theme.PRIMARY_COLOR};
  font-size: 2em;
  font-weight: 500;
  display: block;
  text-align: center;
`;

export default Heading;
