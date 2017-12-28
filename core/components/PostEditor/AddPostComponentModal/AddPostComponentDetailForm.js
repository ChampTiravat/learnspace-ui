import React from "react";
import PropTypes from "prop-types";

import Attachment from "../PostComponents/EditableComponents/Attachment";
import SubHeading from "../PostComponents/EditableComponents/SubHeading";
import Paragraph from "../PostComponents/EditableComponents/Paragraph";
import Heading from "../PostComponents/EditableComponents/Heading";
import Image from "../PostComponents/EditableComponents/Image";
import Video from "../PostComponents/EditableComponents/Video";
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
   * @name headingComponentDataHandler
   * @desc Append the <Heading /> component to the 'receipe'
   * @param { heading_text } : text to display inside the heading component
   */
  headingComponentDataHandler = ({ heading_text }) => {
    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order,
      type
    } = this.props;

    if (!heading_text && heading_text !== "") return;

    addNewPostComponent({
      data: heading_text,
      order,
      type
    });

    hideAddPostComponentModal();
  };

  /**
   * @name subHeadingComponentDataHandler
   * @desc Append the <SubHeading /> component to the 'receipe'
   * @param { sub_heading_text } : text to display inside the sub-heading component
   */
  subHeadingComponentDataHandler = ({ sub_heading_text }) => {
    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order,
      type
    } = this.props;

    if (!sub_heading_text && sub_heading_text !== "") return;

    addNewPostComponent({
      data: sub_heading_text,
      order,
      type
    });

    hideAddPostComponentModal();
  };

  /**
   * @name paragraphComponentDataHandler
   * @desc Append the <Paragraph /> component to the 'receipe'
   * @param { paragraph_text } : text to display inside the sub-heading component
   */
  paragraphComponentDataHandler = ({ paragraph_text }) => {
    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order,
      type
    } = this.props;

    if (!paragraph_text && paragraph_text !== "") return;

    addNewPostComponent({
      data: paragraph_text,
      order,
      type
    });

    hideAddPostComponentModal();
  };

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
   * @desc Append the <Video /> component to the 'receipe'
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
   * @desc Append the <Video /> component to the 'receipe'
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
   * @name renderSelectedComponent
   * @desc Render the selected component which user intended to add to the 'receipe'
   * @return React Component corresponding to the selected component
   */
  renderSelectedComponent = () => {
    const {
      renderModalTitleDependsOnComponentType,
      hideAddPostComponentModal,
      type
    } = this.props;
    switch (type) {
      case SUB_HEADING:
        return (
          <SubHeading
            headerText={renderModalTitleDependsOnComponentType(type)}
            hideAddPostComponentModal={hideAddPostComponentModal}
            submitHandlerFunc={this.subHeadingComponentDataHandler}
          />
        );
      case SLIDE_SHOW:
        return null;
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
            headerText={renderModalTitleDependsOnComponentType(type)}
            hideAddPostComponentModal={hideAddPostComponentModal}
            submitHandlerFunc={this.paragraphComponentDataHandler}
          />
        );
      case HEADING:
        return (
          <Heading
            headerText={renderModalTitleDependsOnComponentType(type)}
            hideAddPostComponentModal={hideAddPostComponentModal}
            submitHandlerFunc={this.headingComponentDataHandler}
          />
        );
      case TABLE:
        return null;
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
        return null;
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
