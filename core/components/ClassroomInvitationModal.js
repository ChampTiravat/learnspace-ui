import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import { Form, InputField, InputLabel, InputGroup } from './Form'
import { ModalBackground, ModalPanel } from './Modal'
import Card, { Header, Body, Footer } from './Card'
import { Button } from './Button'

const ClassroomInvitationModal = () => (
  <ModalBackground show={true}>
    <ModalPanel large>
      <Header>เพิ่มสมาชิกใหม่</Header>
      <Body>
        <Form>
          <InputGroup>
            <Field
              label="อีเมลล์ หรือ username ของผู้ใช้งานที่ท่านต้องการส่งคำเชิญเข้าห้องเรียนนี้"
              type="text"
              component={InputField}
              name="candidate_identifier"
            />
          </InputGroup>
        </Form>
        <Card fluidWidth padding="3em" marginTop="2em" marginBottom="2em">
          {/*  */}
        </Card>
      </Body>
      <Footer>
        <Button primary>ส่งคำเชิญ</Button>
        <Button light>ปิด</Button>
      </Footer>
    </ModalPanel>
  </ModalBackground>
)

export default reduxForm({ form: 'classroom_member_invitation' })(
  ClassroomInvitationModal
)
