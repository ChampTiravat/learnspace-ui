import React from "react";
import PropTypes from "prop-types";

import Attachment from "../PostComponents/EditableComponents/Attachment";
import SubHeading from "../PostComponents/EditableComponents/SubHeading";
import Paragraph from "../PostComponents/EditableComponents/Paragraph";
import Slideshow from "../PostComponents/EditableComponents/Slideshow";
import Heading from "../PostComponents/EditableComponents/Heading";
import Image from "../PostComponents/EditableComponents/Image";
import Table from "../PostComponents/EditableComponents/Table";
import Video from "../PostComponents/EditableComponents/Video";
import List from "../PostComponents/EditableComponents/List";
import Map from "../PostComponents/EditableComponents/Map";
import {
  SUB_HEADING,
  SLIDE_SHOW,
  ATTACHMENT,
  PARAGRAPH,
  HEADING,
  TABLE,
  IMAGE,
  VIDEO,
  LIST,
  MAP
} from "../../../constants/post-content/components";

/**
 * @name addPostComponentDetailForm
 * @desc Display a form to enter a essential data for individial post component type
 * @prop renderModalTitleDependsOnComponentType: f() used to render a corresponding header text for an individial component
 * @prop hideAddPostComponentModal: f() used to hide 'AddPostComponentModal' when component is added
 * @prop addNewPostComponent: f() to add the current component to the 'receipe'
 * @prop order: Rendering order of the current component
 * @prop type: Type of the component which about to be added
 */
class addPostComponentDetailForm extends React.Component {
  /**
   * @name imageComponentDataHandler
   * @desc Append the <Paragraph /> component to the 'receipe'
   * @param { image_url } : URL of the image(if the image is available online)
   * @param { image_alt } : A breif information about the image
   */
  imageComponentDataHandler = ({ image_url, image_alt }) => {
    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order,
      type
    } = this.props;

    if (!image_url && image_url !== "") return;

    addNewPostComponent({
      data: { url: image_url, alt: image_alt || image_url },
      order,
      type
    });

    hideAddPostComponentModal();
  };

  /**
   * @name videoComponentDataHandler
   * @desc Append the <Video /> component to the 'receipe'
   * @param { video_url } : A URL of the YouTube video(must be a URL from https://youtube.com)
   */
  videoComponentDataHandler = ({ video_url }) => {
    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order,
      type
    } = this.props;

    if (!video_url && video_url !== "") return;

    addNewPostComponent({
      data: { url: video_url },
      order,
      type
    });

    hideAddPostComponentModal();
  };

  /**
   * @name mapComponentDataHandler
   * @desc Append the <Map /> component to the 'receipe'
   * @param { location } : A location specified to send to Google Map API
   */
  mapComponentDataHandler = ({ location }) => {
    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order,
      type
    } = this.props;

    if (!location && location !== "") return;

    addNewPostComponent({
      data: { location },
      order,
      type
    });

    hideAddPostComponentModal();
  };

  /**
   * @name attachmentComponentDataHandler
   * @desc Append the <Attachment /> component to the 'receipe'
   * @param { filename } : The name of the uploaded file
   * @param { size } : Size of the file(KBs)
   * @param { type } : Type of the file(PDF,DOCX, TXT, JPG, etc)
   */
  attachmentComponentDataHandler = ({ filename }) => {
    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order,
      type
    } = this.props;

    if (!filename && filename !== "") return;

    addNewPostComponent({
      data: { filename, type: "PDF", size: "100" },
      order,
      type
    });

    hideAddPostComponentModal();
  };

  /**
   * @name listComponentDataHandler
   * @desc Append the <List /> component to the 'receipe'
   * @param { description } : Describe what is presenting in the list
   * @param { items[string] } : Array of list items
   */
  listComponentDataHandler = values => {
    const { metadata, description } = values;
    const items = Object.values(values).filter((item, i) => i !== 0);
    const data = { description, items };
    console.log(metadata);

    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order,
      type
    } = this.props;

    if (
      !description &&
      description !== "" &&
      (items.length && items.length > 0)
    ) {
      return;
    }

    addNewPostComponent({
      order,
      data,
      type
    });

    hideAddPostComponentModal();
  };

  /**
   * @name tableComponentDataHandler
   * @desc Append the <Table /> component to the 'receipe'
   * @param { description } : Describe what is presenting in the list
   * @param { items[string] } : Array of list items
   */
  tableComponentDataHandler = values => {
    return console.log(values);

    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order,
      type
    } = this.props;

    if (
      !description &&
      description !== "" &&
      (items.length && items.length > 0)
    ) {
      return;
    }

    addNewPostComponent({
      order,
      data,
      type
    });

    hideAddPostComponentModal();
  };

  /**
   * @name renderSelectedComponent
   * @desc Render the selected component which user intended to add to the 'receipe'
   * @return React Component corresponding to the selected component
   */
  renderSelectedComponent = () => {
    const {
      renderModalTitleDependsOnComponentType,
      hideAddPostComponentModal,
      addNewPostComponent,
      type,
      order
    } = this.props;
    switch (type) {
      case SUB_HEADING:
        return (
          <SubHeading
            hideAddPostComponentModal={hideAddPostComponentModal}
            addNewPostComponent={addNewPostComponent}
            order={order}
          />
        );
      case SLIDE_SHOW:
        return (
          <Slideshow
            hideAddPostComponentModal={hideAddPostComponentModal}
            addNewPostComponent={addNewPostComponent}
            order={order}
          />
        );
      case ATTACHMENT:
        return (
          <Attachment
            headerText={renderModalTitleDependsOnComponentType(type)}
            hideAddPostComponentModal={hideAddPostComponentModal}
            submitHandlerFunc={this.attachmentComponentDataHandler}
          />
        );
      case PARAGRAPH:
        return (
          <Paragraph
            hideAddPostComponentModal={hideAddPostComponentModal}
            addNewPostComponent={addNewPostComponent}
            order={order}
          />
        );
      case HEADING:
        return (
          <Heading
            hideAddPostComponentModal={hideAddPostComponentModal}
            addNewPostComponent={addNewPostComponent}
            order={order}
          />
        );
      case TABLE:
        return (
          <Table
            headerText={renderModalTitleDependsOnComponentType(type)}
            hideAddPostComponentModal={hideAddPostComponentModal}
            submitHandlerFunc={this.tableComponentDataHandler}
          />
        );
      case IMAGE:
        return (
          <Image
            headerText={renderModalTitleDependsOnComponentType(type)}
            hideAddPostComponentModal={hideAddPostComponentModal}
            submitHandlerFunc={this.imageComponentDataHandler}
          />
        );
      case VIDEO:
        return (
          <Video
            headerText={renderModalTitleDependsOnComponentType(type)}
            hideAddPostComponentModal={hideAddPostComponentModal}
            submitHandlerFunc={this.videoComponentDataHandler}
          />
        );
      case LIST:
        return (
          <List
            headerText={renderModalTitleDependsOnComponentType(type)}
            hideAddPostComponentModal={hideAddPostComponentModal}
            submitHandlerFunc={this.listComponentDataHandler}
          />
        );
      case MAP:
        return (
          <Map
            headerText={renderModalTitleDependsOnComponentType(type)}
            hideAddPostComponentModal={hideAddPostComponentModal}
            submitHandlerFunc={this.mapComponentDataHandler}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return this.renderSelectedComponent();
  }
}

addPostComponentDetailForm.propTypes = {
  renderModalTitleDependsOnComponentType: PropTypes.func.isRequired,
  hideAddPostComponentModal: PropTypes.func.isRequired,
  addNewPostComponent: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default addPostComponentDetailForm;
