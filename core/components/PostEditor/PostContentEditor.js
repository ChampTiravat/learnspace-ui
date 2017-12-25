import React from "react";
import styled from "styled-components";

import SetTitleCard from "./PostComponents/SetPostTitleCard";
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
  state = {
    receipe: [
      /*{id: string, name: string, content: string, isEditing: bool}*/
    ]
  };

  renderContentFromReceipe = () => {
    const { receipe } = this.state;
    return receipe.length > 0
      ? receipe.map((component, i) => {
          if (component === null) {
            return null;
          }
          return (
            <BasedComponent
              removeFunc={() => this.removeReceipe(component.name)}
              SuccesFunc={() => alert("saved")}
              editFunc={() => alert("edit")}
              isEditing={component.isEditing}
              type={component.name}
              text={component.name}
              id={component.name}
            />
          );
        })
      : null;
  };

  removeReceipe = async i => {
    await this.setState(prevState => ({
      receipe: prevState.receipe.reduce((prevItem, nextItem) => {
        if (nextItem.id === i) {
          nextItem = null;
        }
        prevItem.concat(nextItem);
        return prevItem.filter(item => item !== null);
      }, [])
    }));
  };

  addReceipe = (type, content) => {
    this.setState(prevState => ({
      receipe: prevState.receipe.concat({
        isEditing: false,
        content: content,
        name: type,
        id: type
      })
    }));
  };

  render() {
    console.table(this.state.receipe);
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

export default PostContentEditor;
