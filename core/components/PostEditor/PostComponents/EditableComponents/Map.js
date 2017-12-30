import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

import { MAP } from "../../../../constants/post-content/components";
import { SuccessButton, DangerButton } from "../../../Button";
import { Header, Body, Footer } from "../../../Card";
import { Form, InputField } from "../../../Form";

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
   * @name submitHandler
   * @desc Append the <Map /> component to the 'receipe'
   * @param { location } : A location specified to send to Google Map API
   */
  submitHandler = ({ location }) => {
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

  render() {
    const { hideAddPostComponentModal, handleSubmit } = this.props;
    return [
      <Header>แผนที่</Header>,
      <Form onSubmit={handleSubmit(this.submitHandler)}>
        <Body>
          <Field name="location" component={InputField} type="text" />
        </Body>
        <Footer>
          <SuccessButton marginRight="0.5em">เสร็จสิ้น</SuccessButton>
          <DangerButton type="button" onClick={hideAddPostComponentModal}>
            ยกเลิก
          </DangerButton>
        </Footer>
      </Form>
    ];
  }
}

Map.propTypes = {
  hideAddPostComponentModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  addNewPostComponent: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired
};

export default reduxForm({ form: "map_component_data" })(Map);
