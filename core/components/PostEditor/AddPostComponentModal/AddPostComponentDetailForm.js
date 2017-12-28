import React from "react";
import PropTypes from "prop-types";

import SubHeading from "../PostComponents/EditableComponents/SubHeading";
import Paragraph from "../PostComponents/EditableComponents/Paragraph";
import Heading from "../PostComponents/EditableComponents/Heading";
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
   * @param { sub_heading_text } : text to display inside the sub-heading component
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
        return null;
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
        return null;
      case VIDEO:
        return null;
      case LIST:
        return null;
      case MAP:
        return null;
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
