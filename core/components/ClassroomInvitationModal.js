import React from 'react'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { graphql, compose } from 'react-apollo'

import { Form, InputField, InputLabel, InputGroup } from './Form'
import { ModalBackground, ModalPanel } from './Modal'
import Card, { Header, Body, Footer } from './Card'
import { Button } from './Button'

/**
 * @name ClassroomInvitationModal
 * @desc Modal used to invite new member to a classroom
 * @prop { isShowing } [REDUX] : State of the modal(TRUE if showing, FALSE otherwise)
 * @prop { hideClassroomInvitationModal } [REDUX] : f() to hide this modal
 * @prop { handleSubmit } [REDUX] : redux-form's form submition handler function
 * @prop { mutate } [APOLLO] : f() to perform GraphQL mutation
 */
class ClassroomInvitationModal extends React.Component {
  submitHandler = async ({ candidate_identifier }) => {
    try {
      const result = await this.props.mutate({
        variables: {
          candidateIdent: candidate_identifier,
          classroomID: '' // Will be replaced by a real value, soon
        }
      })

      const { success } = result.data.inviteUser

      if (success) {
        // Router.push(LOGIN_PAGE)
        alert('failed')
      } else {
        alert('failed')
      }
    } catch (err) {
      // Do something with this later
    }
  }

  submitClassroomInvitationForm = () => {
    this.refs.ClassroomInvitationSubmitButton.click()
  }

  render() {
    const { isShowing, hideClassroomInvitationModal, handleSubmit } = this.props
    return (
      <ModalBackground show={isShowing}>
        <ModalPanel large>
          <Header>เพิ่มสมาชิกใหม่</Header>
          <Body>
            <form
              ref="ClassroomInvitationForm"
              onSubmit={handleSubmit(this.submitHandler)}
            >
              <InputGroup>
                <Field
                  type="text"
                  component={InputField}
                  name="candidate_identifier"
                  label="อีเมลล์ หรือ username ของผู้ใช้งานที่ท่านต้องการส่งคำเชิญเข้าห้องเรียนนี้"
                />
              </InputGroup>
              <input
                type="submit"
                style={{ display: 'none' }}
                ref="ClassroomInvitationSubmitButton"
              />
            </form>
            <Card fluidWidth padding="3em" marginTop="2em" marginBottom="2em">
              {/*  */}
            </Card>
          </Body>
          <Footer>
            <Button primary onClick={this.submitClassroomInvitationForm}>
              ส่งคำเชิญ
            </Button>
            <Button light onClick={hideClassroomInvitationModal}>
              ปิด
            </Button>
          </Footer>
        </ModalPanel>
      </ModalBackground>
    )
  }
}

ClassroomInvitationModal.propTypes = {
  hideClassroomInvitationModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isShowing: PropTypes.bool.isRequired,
  mutate: PropTypes.func.isRequired
}

const INVITE_USER_MUTATION = gql`
  mutation inviteUser($candidateIdent: String!, $classroomID: String!) {
    inviteUser(candidateIdent: $candidateIdent, classroomID: $classroomID) {
      success
      err {
        message
      }
    }
  }
`

export default compose(
  reduxForm({ form: 'classroom_member_invitation' }),
  graphql(INVITE_USER_MUTATION)
)(ClassroomInvitationModal)
