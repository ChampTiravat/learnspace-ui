import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { reduxForm, Field } from "redux-form";

import { ATTACHMENT } from "../../../../constants/post-content/components";
import { Header, Body, Footer } from "../../../Card";
import { Form, InputField } from "../../../Form";
import { Button } from "../../../Button";

const AttachmentUpLoadWrapper = styled.div`
  height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
`;

/**
 * @name Attachment
 * @desc Display a available file to download, used to provide additional resources for readers such as origin papers, homework
 * @prop [REDUX-FORM] handleSubmit : Redux-Form's default form handle function
 * @prop hideAddPostComponentModal : f() to close the AddPostComponentModal(close the modal intentionally)
 * @prop addNewPostComponent : f() to append a new post component to receipe
 * @prop order : The component's current order in receipe
 * @prop type : Type of the component to be inserted
 */
class Attachment extends React.Component {
  /**
   * @name submitHandler
   * @desc Append the <Attachment /> component to the 'receipe'
   * @param { filename } : The name of the uploaded file
   * @param { size } : Size of the file(KBs)
   * @param { type } : Type of the file(PDF,DOCX, TXT, JPG, etc)
   */
  submitHandler = ({ filename }) => {
    const {
      hideAddPostComponentModal,
      addNewPostComponent,
      order
    } = this.props;

    if (!filename && filename !== "") return;

    addNewPostComponent({
      data: { filename, type: "PDF", size: "100" },
      type: ATTACHMENT,
      order
    });

    hideAddPostComponentModal();
  };

  render() {
    const { hideAddPostComponentModal, handleSubmit } = this.props;
    return [
      <Header>ไฟล์แนบ</Header>,
      <Form onSubmit={handleSubmit(this.submitHandler)}>
        <Body>
          <AttachmentUpLoadWrapper>
            <Button light>เลือกไฟล์</Button>
          </AttachmentUpLoadWrapper>
          <Field name="filename" component={InputField} type="text" />
        </Body>
        <Footer>
          <Button success marginRight="0.5em">
            เสร็จสิ้น
          </Button>
          <Button danger type="button" onClick={hideAddPostComponentModal}>
            ยกเลิก
          </Button>
        </Footer>
      </Form>
    ];
  }
}

Attachment.propTypes = {
  hideAddPostComponentModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  addNewPostComponent: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired
};

export default reduxForm({ form: "attachment_component_data" })(Attachment);
