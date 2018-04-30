import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { NotificationItem } from './NotificationPanel'
import { ModalBackground, ModalPanel } from './Modal'
import { Header, Body, Footer } from './Card'
import { Button } from './Button'

import { showNotificationModal, hideNotificationModal } from '../reducers/notification-modal'

const NotificationModal = ({ isModalShowing, showModal, hideModal }) => (
  <ModalBackground show={isModalShowing}>
    <ModalPanel large>
      <Header>การแจ้งเตือน</Header>
      <Body overflowY="scroll" height="600px">
        <NotificationItem
          origin="Introduction to Computer Science"
          content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
        />
        <NotificationItem
          origin="Computer Vision and Image Processing"
          content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
        />
        <NotificationItem
          origin="Chris Evans"
          content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
        />
        <NotificationItem
          origin="Introduction to Computer Science"
          content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
        />
        <NotificationItem
          origin="Programming with Python"
          content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
        />
        <NotificationItem
          origin="Introduction to Computer Science"
          content="ไสดมวไำดยสเนาฟบไำานดำฟสาดร่เพเาๆขนายำสกยบากนฟกานฟหากจๆไำาดชๆสยไำนด่ำไจาเ"
        />
      </Body>
      <Footer>
        <Button light onClick={() => hideModal()}>
          ปิด
        </Button>
      </Footer>
    </ModalPanel>
  </ModalBackground>
)

const mapStateToProps = state => ({
  isModalShowing: state.notificationModal
})

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(showNotificationModal()),
  hideModal: () => dispatch(hideNotificationModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationModal)
