import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import SetTitleCard from "./PostComponents/SetPostTitleCard";
import BasedComponent from "./PostComponents/BasedComponent";
import EmptyField from "./PostComponents/EmptyField";
import Card from "../Card";
import {
  SUB_HEADING,
  SLIDE_SHOW,
  ATTACHMENT,
  PARAGRAPH,
  HEADING,
  TABLE,
  IMAGE,
  VIDEO,
  MAP
} from "../../constants/post-content/components";

class PostContentEditor extends React.Component {
  shouldComponentUpdate(nextProp) {
    return this.props.receipe !== nextProp.receipe;
  }

  renderContentFromReceipe = () => {
    const { receipe } = this.props;
    console.table(receipe); // DEBUGGING
    return receipe.length > 0
      ? receipe.map((component, i) => {
          return !component ? null : (
            <div order={component.order}>
              <h4>{component.type}</h4>
            </div>
          );
        })
      : null;
  };

  render() {
    return (
      <div>
        <SetTitleCard />
        <Card fluidWidth padding="2em" marginBottom="4em">
          {this.renderContentFromReceipe()}
          <EmptyField />
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  receipe: state.editingPostReceipe
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PostContentEditor);
