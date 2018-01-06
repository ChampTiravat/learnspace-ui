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
 * @prop hideAddPostComponentModal: f() used to hide 'AddPostComponentModal' when component is added
 * @prop addNewPostComponent: f() to add the current component to the 'receipe'
 * @prop order: Rendering order of the current component
 * @prop type: Type of the component which about to be added
 */
class addPostComponentDetailForm extends React.Component {
  render() {
    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      type,
      order
    } = this.props;

    if (!type) {
      return null;
    }

    const components = [
      { type: HEADING, form: Heading },
      { type: SUB_HEADING, form: SubHeading },
      { type: PARAGRAPH, form: Paragraph },
      { type: IMAGE, form: Image },
      { type: LIST, form: List },
      { type: VIDEO, form: Video },
      { type: MAP, form: Map },
      { type: TABLE, form: Table },
      { type: SLIDE_SHOW, form: Slideshow },
      { type: ATTACHMENT, form: Attachment }
    ];

    const ComponentToRender = components.filter(
      component => component.type === type
    )[0].form;

    return (
      <ComponentToRender
        hideAddPostComponentModal={hideAddPostComponentModal}
        addNewPostComponent={addNewPostComponent}
        useToAddComponent={true}
        order={order}
      />
    );
  }
}

addPostComponentDetailForm.propTypes = {
  hideAddPostComponentModal: PropTypes.func.isRequired,
  addNewPostComponent: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired,
  type: PropTypes.string
};

export default addPostComponentDetailForm;
