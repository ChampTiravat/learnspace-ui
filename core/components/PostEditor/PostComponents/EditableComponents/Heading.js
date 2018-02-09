import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'

import { HEADING } from '../../../../constants/post-content/components'
import { Header, Body, Footer } from '../../../Card'
import { Form, InputField } from '../../../Form'
import { Button } from '../../../Button'

/**
 * @name Heading
 * @desc Display a heading text, used to remind readers the topic which thay are currently reading
 * @prop { handleSubmit } [REDUX_FORM] : Redux-Form's default form handle function
 * @prop { hideAddPostComponentModal } [REDUX] : f() to close the AddPostComponentModal(close the modal intentionally)
 * @prop { useToAddComponent } [REDUX] : Specify wether to use this modal to add new component or edit the one existed
 * @prop { addNewPostComponent } [REDUX] : f() to append a new post component to receipe
 * @prop { editPostComponent } [REDUX] : f() to edit an existing post component in the receipe
 * @prop { order } [REDUX] : The component's current order in receipe
 * @prop { type } [REDUX] : Type of the component to be inserted
 */
class Heading extends React.Component {
  /**
   * @name addComponentHandler()
   * @desc Append the <Heading /> component to the 'receipe'
   * @param { heading_text } : text to display inside the heading component
   */
  addComponentHandler = ({ heading_text }) => {
    const { hideAddPostComponentModal, addNewPostComponent, order } = this.props

    if (!heading_text && heading_text !== '') return

    addNewPostComponent({
      data: heading_text,
      type: HEADING,
      order
    })

    hideAddPostComponentModal()
  }

  /**
   * @name editComponentHandler()
   * @desc Edit the specific <Heading /> component in the 'receipe'
   * @param { heading_text } : text to display inside the heading component
   */
  editComponentHandler = ({ heading_text }) => {
    const { hideEditPostComponentModal, editPostComponent, order } = this.props

    if (!heading_text && heading_text !== '') return

    editPostComponent({
      newData: heading_text,
      type: HEADING,
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
      <Header>หัวข้อเรื่อง</Header>,
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Body>
          <Field name="heading_text" component={InputField} type="text" />
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

Heading.propTypes = {
  useToAddComponent: PropTypes.bool.isRequired,
  hideAddPostComponentModal: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
  addNewPostComponent: PropTypes.func,
  editPostComponent: PropTypes.func,
  order: PropTypes.number.isRequired
}

export default reduxForm({ form: 'heading_component_data' })(Heading)
