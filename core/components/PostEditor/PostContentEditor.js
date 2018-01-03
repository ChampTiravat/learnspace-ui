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
 * @prop showComponentsSelectorModal: f() to select the post component to add to the receipe
 * @prop resetPost: f() to remove every components in the current post editor
 * @prop receipe: Array of post components
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
            <BasedComponent key={component.order} type={HEADING}>
              <Heading key={component.order}>{component.data}</Heading>
            </BasedComponent>
          );
        case VIDEO:
          return (
            <BasedComponent key={component.order} type={VIDEO}>
              <Video key={component.order} />
            </BasedComponent>
          );
        case SUB_HEADING:
          return (
            <BasedComponent key={component.order} type={SUB_HEADING}>
              <SubHeading key={component.order}>{component.data}</SubHeading>
            </BasedComponent>
          );
        case PARAGRAPH:
          return (
            <BasedComponent key={component.order} type={PARAGRAPH}>
              <Paragraph key={component.order}>{component.data}</Paragraph>
            </BasedComponent>
          );
        case LIST:
          return (
            <BasedComponent key={component.order} type={LIST}>
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
            <BasedComponent key={component.order} type={IMAGE}>
              <Image
                key={component.order}
                src={component.data.url}
                alt={component.data.alt}
              />
            </BasedComponent>
          );
        case TABLE:
          return (
            <BasedComponent key={component.order} type={TABLE}>
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
            <BasedComponent key={component.order} type={SLIDE_SHOW}>
              <Slideshow key={component.order} images={component.data} />
            </BasedComponent>
          );
        case MAP:
          return (
            <BasedComponent key={component.order} type={MAP}>
              <Map key={component.order} />
            </BasedComponent>
          );
        case ATTACHMENT:
          return (
            <BasedComponent key={component.order} type={ATTACHMENT}>
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
    const { receipe, resetPost, showComponentsSelectorModal } = this.props;
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
                right="3em"
                bottom="15em"
                position="fixed"
                padding="1.3em 1em"
                onClick={resetPost}
              >
                รีเซ็ต
              </CircleButton>,
              <CircleButton
                light
                padding="1.3em 1em"
                position="fixed"
                bottom="9em"
                right="3em"
              >
                พรีวิว
              </CircleButton>,
              <CircleButton
                primary
                right="3em"
                bottom="3em"
                position="fixed"
                padding="1.3em 1em"
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
  resetPost: PropTypes.func.isRequired,
  receipe: PropTypes.array.isRequired
};

export default PostContentEditor;
