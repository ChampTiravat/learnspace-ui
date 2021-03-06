import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { reduxForm, Field } from 'redux-form'

import { ATTACHMENT } from '../../../../constants/post-content/components'
import { Header, Body, Footer } from '../../../Card'
import { Form, InputField } from '../../../Form'
import { Button } from '../../../Button'

const AttachmentUpLoadWrapper = styled.div`
  height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
`

/**
 * @name Attachment
 * @desc Display a available file to download, used to provide additional resources for readers such as origin papers, homework
 * @prop { handleSubmit } [REDUX_FORM] : Redux-Form's default form handle function
 * @prop { hideAddPostComponentModal } [REDUX] : f() to close the AddPostComponentModal(close the modal intentionally)
 * @prop { useToAddComponent } [REDUX] : Specify wether to use this modal to add new component or edit the one existed
 * @prop { addNewPostComponent } [REDUX] : f() to append a new post component to receipe
 * @prop { editPostComponent } [REDUX] : f() to edit an existing post component in the receipe
 * @prop { order } [REDUX] : The component's current order in receipe
 * @prop { type } [REDUX] : Type of the component to be inserted
 */
class Attachment extends React.Component {
  /**
   * @name addComponentHandler
   * @desc Append the <Attachment /> component to the 'receipe'
   * @param { filename } : The name of the uploaded file
   * @param { size } : Size of the file(KBs)
   * @param { type } : Type of the file(PDF,DOCX, TXT, JPG, etc)
   */
  addComponentHandler = ({ filename }) => {
    const { hideAddPostComponentModal, addNewPostComponent, order } = this.props

    if (!filename && filename !== '') return

    addNewPostComponent({
      data: { filename, type: 'PDF', size: '100' },
      type: ATTACHMENT,
      order
    })

    hideAddPostComponentModal()
  }

  /**
   * @name editComponentHandler()
   * @desc Edit the specific <Attachment /> component in the 'receipe'
   * @param { filename } : The name of the uploaded file
   * @param { size } : Size of the file(KBs)
   * @param { type } : Type of the file(PDF,DOCX, TXT, JPG, etc)
   */
  editComponentHandler = ({ filename }) => {
    const { hideEditPostComponentModal, editPostComponent, order } = this.props

    if (!filename && filename !== '') return

    editPostComponent({
      newData: { filename, type: 'PDF', size: '100' },
      type: ATTACHMENT,
      order
    })

    hideEditPostComponentModal()
  }

  render() {
    const {
      hideAddPostComponentModal,
      hideEditPostComponentModal,
      handleSubmit,
      useToAddComponent
    } = this.props

    /*
      Specify which f() will be used to hide this modal
      depending on wether this modal have been called as
      a modal to add new component or editing the new one
    */
    const hideThisModal = useToAddComponent
      ? hideAddPostComponentModal
      : hideEditPostComponentModal

    /*
      Specify which f() will be used to submit the form 
      depending on wether this modal have been called as
      a modal to add new component or editing the new one
    */
    const submitHandler = useToAddComponent
      ? this.addComponentHandler
      : this.editComponentHandler

    return [
      <Header>ไฟล์แนบ</Header>,
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Body>
          <AttachmentUpLoadWrapper>
            <Button light>เลือกไฟล์</Button>
          </AttachmentUpLoadWrapper>
          <Field name="filename" component={InputField} type="text" />
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
    ]
  }
}

Attachment.propTypes = {
  useToAddComponent: PropTypes.bool.isRequired,
  hideAddPostComponentModal: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
  addNewPostComponent: PropTypes.func,
  editPostComponent: PropTypes.func,
  order: PropTypes.number.isRequired
}

export default reduxForm({ form: 'attachment_component_data' })(Attachment)
