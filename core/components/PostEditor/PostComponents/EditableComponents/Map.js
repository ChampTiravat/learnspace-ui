import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

import { MAP } from "../../../../constants/post-content/components";
import { Header, Body, Footer } from "../../../Card";
import { Form, InputField } from "../../../Form";
import { Button } from "../../../Button";

/**
 * @name Map
 * @desc Display a Google Map, used to present direction of a real location
 * @prop [REDUX-FORM] handleSubmit : Redux-Form's default form handle function
 * @prop hideAddPostComponentModal : f() to close the AddPostComponentModal(close the modal intentionally)
 * @prop addNewPostComponent : f() to append a new post component to receipe
 * @prop order : The component's current order in receipe
 * @prop type : Type of the component to be inserted
 */
class Map extends React.Component {
  /**
   * @name addComponentHandler()
   * @desc Append the <Map /> component to the 'receipe'
   * @param { location } : A location specified to send to Google Map API
   */
  addComponentHandler = ({ location }) => {
    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order
    } = this.props;

    if (!location && location !== "") return;

    addNewPostComponent({
      data: { location },
      type: MAP,
      order
    });

    hideAddPostComponentModal();
  };

  /**
   * @name addComponentHandler()
   * @desc Edit the specific <Map /> component in the 'receipe'
   * @param { location } : A location specified to send to Google Map API
   */
  editComponentHandler = ({ location }) => {
    const { hideEditPostComponentModal, editPostComponent, order } = this.props;

    if (!location && location !== "") return;

    editPostComponent({
      newData: { location },
      type: MAP,
      order
    });

    hideEditPostComponentModal();
  };

  render() {
    const {
      hideAddPostComponentModal,
      hideEditPostComponentModal,
      handleSubmit,
      useToAddComponent
    } = this.props;

    /*
      Specify the which f() will be used to hide this modal
      depending on wether this modal have been called as
      a modal to add new component or editing the new one
    */
    const hideThisModal = useToAddComponent
      ? hideAddPostComponentModal
      : hideEditPostComponentModal;

    /*
      Specify the which f() will be used to submit the form 
      depending on wether this modal have been called as
      a modal to add new component or editing the new one
    */
    const submitHandler = useToAddComponent
      ? this.addComponentHandler
      : this.editComponentHandler;

    return [
      <Header>แผนที่</Header>,
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Body>
          <Field name="location" component={InputField} type="text" />
        </Body>
        <Footer>
          <Button primary marginRight="0.5em">
            เสร็จสิ้น
          </Button>
          <Button light type="button" onClick={hideThisModal}>
            ยกเลิก
          </Button>
        </Footer>
      </Form>
    ];
  }
}

Map.propTypes = {
  useToAddComponent: PropTypes.bool.isRequired,
  hideAddPostComponentModal: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
  addNewPostComponent: PropTypes.func,
  editPostComponent: PropTypes.func,
  order: PropTypes.number.isRequired
};

export default reduxForm({ form: "map_component_data" })(Map);
