import React from "react";

import BasedComponent from "../components/PostEditor/PostComponents/BasedComponent";
import SubHeading from "../components/PostPage/RenderedComponents/SubHeading";
import Attachment from "../components/PostPage/RenderedComponents/Attachment";
import Paragraph from "../components/PostPage/RenderedComponents/Paragraph";
import Slideshow from "../components/PostPage/RenderedComponents/Slideshow";
import Heading from "../components/PostPage/RenderedComponents/Heading";
import Image from "../components/PostPage/RenderedComponents/Image";
import Table from "../components/PostPage/RenderedComponents/Table";
import Video from "../components/PostPage/RenderedComponents/Video";
import List from "../components/PostPage/RenderedComponents/List";
import Map from "../components/PostPage/RenderedComponents/Map";

import {
  HEADING,
  VIDEO,
  SUB_HEADING,
  PARAGRAPH,
  LIST,
  IMAGE,
  TABLE,
  SLIDE_SHOW,
  MAP,
  ATTACHMENT
} from "../constants/post-content/components";

const availableComponents = {
  HEADING: ({ component }) => (
    <Heading key={component.order}>{component.data}</Heading>
  ),

  VIDEO: ({ component }) => <Video key={component.order} />,

  SUB_HEADING: ({ component }) => (
    <SubHeading key={component.order}>{component.data}</SubHeading>
  ),

  PARAGRAPH: ({ component }) => (
    <Paragraph key={component.order}>{component.data}</Paragraph>
  ),

  LIST: ({ component }) => (
    <List description={component.data.description} key={component.order}>
      {component.data.items.map((item, i) => <li key={i}>{item}</li>)}
    </List>
  ),

  IMAGE: ({ component }) => (
    <Image
      key={component.order}
      src={component.data.url}
      alt={component.data.alt}
    />
  ),

  TABLE: ({ component }) => (
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
          <tr key={i}>{dataRow.map((data, i) => <td key={i}>{data}</td>)}</tr>
        ))}
      </tbody>
    </Table>
  ),

  SLIDE_SHOW: ({ component }) => (
    <Slideshow key={component.order} images={component.data} />
  ),

  MAP: component => <Map key={component.order} />,

  ATTACHMENT: ({ component }) => (
    <Attachment
      key={component.order}
      filename={component.data.filename}
      size={component.data.size}
      type={component.data.type}
    />
  )
};

/**
 * @name renderEditableComponent()
 * @desc Render post components from receipe(used this in PostEditor)
 * @param receipe : Post's receipe contents of components that need to be rendered
 * @param removePostComponent : A f() to remove a single post component in the receipe
 */
export const renderEditableComponent = (receipe, removePostComponent) =>
  !receipe || receipe.length === 0
    ? null
    : receipe.map(component => {
        const ComponentToRender = availableComponents[component.type];
        return (
          <BasedComponent
            key={component.order}
            type={component.type}
            order={component.order}
            removePostComponent={removePostComponent}
          >
            <ComponentToRender component={component} />
          </BasedComponent>
        );
      });

/**
 * @name renderPostComponent()
 * @desc Render component(s) in a given receipe
 * @param receipe : Post's receipe contents of components that need to be rendered
 */
export const renderPostComponent = receipe =>
  !receipe || receipe.length === 0
    ? null
    : receipe.map(component => {
        const ComponentToRender = availableComponents[component.type];
        return <ComponentToRender component={component} />;
      });
