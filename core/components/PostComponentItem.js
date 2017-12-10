import React from "react";
import PropTypes from "prop-types";

import Card from "./Card";

const PostComponentCard = Card.extend`
  max-width: 100%;
  text-align: center;
  margin-bottom: 1em;
  padding: 2em;
  box-shadow: none;
  cursor: grab;
  h3 {
    color: ${p => p.theme.primaryColor};
    font-weight: 400;
    font-size: 1.5em;
  }
  &:hover {
    box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
  }
`;

class PostComponentItem extends React.Component {
  render() {
    const { label } = this.props;
    return (
      <PostComponentCard>
        <h3>{label}</h3>
      </PostComponentCard>
    );
  }
}

PostComponentItem.propTypes = {
  label: PropTypes.string.isRequired
};

export default PostComponentItem;
