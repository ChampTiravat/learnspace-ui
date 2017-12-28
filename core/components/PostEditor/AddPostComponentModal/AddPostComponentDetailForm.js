import React from "react";
import PropTypes from "prop-types";

import Heading from "../PostComponents/EditableComponents/Heading";

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
  HeadingComponentDataHandler = ({ heading_text }) => {
    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order,
      type
    } = this.props;
    // Append the component to the post
    addNewPostComponent({
      data: heading_text,
      order,
      type
    });
    // Close the modal
    hideAddPostComponentModal();
  };

  render() {
    const {
      renderModalTitleDependsOnComponentType,
      hideAddPostComponentModal,
      type
    } = this.props;

    return (
      <Heading
        headerText={renderModalTitleDependsOnComponentType(type)}
        hideAddPostComponentModal={hideAddPostComponentModal}
        submitHandlerFunc={this.HeadingComponentDataHandler}
      />
    );
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
