import styled from "styled-components";

const PostComponentItem = styled.div`
  display: inline-block;
  width: 45%;
  padding: 1em;
  margin: 0.5em 0.3em;
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
  font-size: 1.4em;
  font-weight: 400;
  color: ${p => p.theme.primaryColor};
  cursor: pointer;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export default PostComponentItem;
