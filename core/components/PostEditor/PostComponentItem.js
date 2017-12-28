import styled from "styled-components";
import PropTypes from "prop-types";

const PostComponentItemWrapper = styled.div`
  display: inline-block;
  width: 45%;
  padding: 1em;
  margin: 0.5em 0.3em;
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
  font-size: 1.4em;
  font-weight: 400;
  color: ${p => p.theme.PRIMARY_COLOR};
  cursor: pointer;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

/**
 * @name PostComponentItem
 * @desc Used to display a available component which can be added to the post
 * @prop name : The name of the component
 */
const PostComponentItem = props => (
  <PostComponentItemWrapper {...props}>{props.name}</PostComponentItemWrapper>
);

PostComponentItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default PostComponentItem;
