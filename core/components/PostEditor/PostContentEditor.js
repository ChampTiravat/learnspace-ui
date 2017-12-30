import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

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
import { PrimaryButton } from "../Button";
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

const SaveButton = PrimaryButton.extend`
  color: #fff;
  margin-left: 1em;
  padding: 1.3em 1em;
  border-radius: 50%;
  text-align: center;
  font-size: 1.1em;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: 150ms ease-in;
  position: fixed;
  bottom: 3em;
  right: 3em;
  &:hover {
    background-color: #fff;
    color: ${p => p.theme.PRIMARY_COLOR};
  }
`;

const PreviewButton = SaveButton.extend`
  background-color: #fff;
  color: ${p => p.theme.PRIMARY_COLOR};
  bottom: 8em;
`;

class PostContentEditor extends React.Component {
  shouldComponentUpdate(nextProp) {
    return this.props.receipe !== nextProp.receipe;
  }

  renderContentFromReceipe = () => {
    const { receipe } = this.props;
    return receipe.map(component => {
      switch (component.type) {
        case HEADING:
          return <Heading key={component.order}>{component.data}</Heading>;
        case VIDEO:
          return <Video key={component.order} />;
        case SUB_HEADING:
          return (
            <SubHeading key={component.order}>{component.data}</SubHeading>
          );
        case PARAGRAPH:
          return <Paragraph key={component.order}>{component.data}</Paragraph>;
        case LIST:
          return (
            <List
              description={component.data.description}
              key={component.order}
            >
              {component.data.items.map((item, i) => <li key={i}>{item}</li>)}
            </List>
          );
        case IMAGE:
          return (
            <Image
              key={component.order}
              src={component.data.url}
              alt={component.data.alt}
            />
          );
        case TABLE:
          return (
            <Table
              name={component.data.meta.name}
              description={component.data.meta.description}
            >
              <thead>
                <tr>
                  {component.data.head.map((columnName, i) => (
                    <th key={i}>{columnName}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {component.data.body.map((dataRow, i) => (
                  <tr key={i}>
                    {dataRow.map((data, i) => <td key={i}>{data}</td>)}
                  </tr>
                ))}
              </tbody>
            </Table>
          );
        case SLIDE_SHOW:
          return <Slideshow key={component.order} images={component.data} />;
        case MAP:
          return <Map key={component.order} />;
        case ATTACHMENT:
          return (
            <Attachment
              key={component.order}
              filename={component.data.filename}
              size={component.data.size}
              type={component.data.type}
            />
          );
        default:
          return null;
      }
    });
  };

  render() {
    const { receipe } = this.props;
    return (
      <div>
        <SetTitleCard />
        <Card fluidWidth padding="2em" marginBottom="4em">
          {this.renderContentFromReceipe()}
          <EmptyField />
        </Card>
        {receipe.length > 0
          ? [
              <SaveButton>บันทึก</SaveButton>,
              <PreviewButton>พรีวิว</PreviewButton>
            ]
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  receipe: state.editingPostReceipe
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PostContentEditor);
