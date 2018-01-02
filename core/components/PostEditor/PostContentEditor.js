import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SubHeading from "../PostPage/RenderedComponents/SubHeading";
import Attachment from "../PostPage/RenderedComponents/Attachment";
import Paragraph from "../PostPage/RenderedComponents/Paragraph";
import Slideshow from "../PostPage/RenderedComponents/Slideshow";
import Heading from "../PostPage/RenderedComponents/Heading";
import Video from "../PostPage/RenderedComponents/Video";
import Table from "../PostPage/RenderedComponents/Table";
import Image from "../PostPage/RenderedComponents/Image";
import List from "../PostPage/RenderedComponents/List";
import Map from "../PostPage/RenderedComponents/Map";

import SetTitleCard from "./PostComponents/SetPostTitleCard";
import BasedComponent from "./PostComponents/BasedComponent";
import EmptyField from "./PostComponents/EmptyField";
import { CircleButton } from "../Button";
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
  MAP,
  LIST
} from "../../constants/post-content/components";

/**
 * @name PostContentEditor
 * @desc Main playground for building post with the required tools
 * @prop receipe: Array of post components
 * @prop showComponentsSelectorModal: f() to select the post component to add to the receipe
 */
class PostContentEditor extends React.Component {
  shouldComponentUpdate(nextProp) {
    return this.props.receipe !== nextProp.receipe;
  }

  renderContentFromReceipe = () => {
    const { receipe } = this.props;
    return receipe.map(component => {
      switch (component.type) {
        case HEADING:
          return (
            <BasedComponent type={HEADING}>
              <Heading key={component.order}>{component.data}</Heading>
            </BasedComponent>
          );
        case VIDEO:
          return (
            <BasedComponent type={VIDEO}>
              <Video key={component.order} />
            </BasedComponent>
          );
        case SUB_HEADING:
          return (
            <BasedComponent type={SUB_HEADING}>
              <SubHeading key={component.order}>{component.data}</SubHeading>
            </BasedComponent>
          );
        case PARAGRAPH:
          return (
            <BasedComponent type={PARAGRAPH}>
              <Paragraph key={component.order}>{component.data}</Paragraph>
            </BasedComponent>
          );
        case LIST:
          return (
            <BasedComponent type={LIST}>
              <List
                description={component.data.description}
                key={component.order}
              >
                {component.data.items.map((item, i) => <li key={i}>{item}</li>)}
              </List>
            </BasedComponent>
          );
        case IMAGE:
          return (
            <BasedComponent type={IMAGE}>
              <Image
                key={component.order}
                src={component.data.url}
                alt={component.data.alt}
              />
            </BasedComponent>
          );
        case TABLE:
          return (
            <BasedComponent type={TABLE}>
              <Table
                name={component.data.meta.name}
                description={component.data.meta.description}
                head={component.data.head}
                body={component.data.body}
              />
            </BasedComponent>
          );
        case SLIDE_SHOW:
          return (
            <BasedComponent type={SLIDE_SHOW}>
              <Slideshow key={component.order} images={component.data} />;
            </BasedComponent>
          );
        case MAP:
          return (
            <BasedComponent type={MAP}>
              <Map key={component.order} />;
            </BasedComponent>
          );
        case ATTACHMENT:
          return (
            <BasedComponent type={ATTACHMENT}>
              <Attachment
                key={component.order}
                filename={component.data.filename}
                size={component.data.size}
                type={component.data.type}
              />
            </BasedComponent>
          );
        default:
          return null;
      }
    });
  };

  render() {
    const { receipe, showComponentsSelectorModal } = this.props;
    console.log(receipe);
    return [
      <SetTitleCard />,
      <Card fluidWidth padding="2em" marginBottom="4em">
        {this.renderContentFromReceipe()}
        <EmptyField onClick={showComponentsSelectorModal} />
      </Card>,
      <div>
        {receipe.length > 0
          ? [
              <CircleButton
                light
                padding="1.3em 1em"
                position="fixed"
                right="3em"
                bottom="9em"
              >
                พรีวิว
              </CircleButton>,
              <CircleButton
                primary
                padding="1.3em 1em"
                position="fixed"
                right="3em"
                bottom="3em"
                onClick={() => alert("Saving")}
              >
                บันทึก
              </CircleButton>
            ]
          : null}
      </div>
    ];
  }
}

PostContentEditor.propTypes = {
  showComponentsSelectorModal: PropTypes.func.isRequired,
  receipe: PropTypes.array.isRequired
};

export default PostContentEditor;
