import styled from "styled-components";

import Card from "../Card";

const PostContentWrapper = Card.extend`
  width: 100%;
  max-width: 100%;
  padding: 5em 3em;
  height: auto;
  margin-bottom: 2em;
  font-size: 1.2em;
  color: #555;
  text-align: left;
`;

export default PostContentWrapper;
