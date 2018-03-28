import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  showClassroomInvitationModal,
  hideClassroomInvitationModal
} from '../core/actions/classroom-actions'

import ClassroomMemberPanel from '../core/components/ClassroomMemberPage/ClassroomMemberPanel'
import ClassroomActivityPanel from '../core/components/ClassroomPage/ClassroomActivityPanel'
import ClassroomHeaderPanel from '../core/components/ClassroomPage/ClassroomHeaderPanel'
import ClassroomInvitationModal from '../core/components/ClassroomInvitationModal'
import AuthenticatedLayout from '../core/components/Layout/AuthenticatedLayout'
import { CLASSROOM_PAGE } from '../core/constants/endpoints/ui'
import Container from '../core/components/Container'
import PostsList from '../core/components/PostsList'
import { Button } from '../core/components/Button'
import Card from '../core/components/Card'
import withData from '../core/withData'

/**
 * @name ClassroomMemberPage
 * @desc Display list of members of a particular classroom
 * @prop { isClassroomInvitationModalShowing } [REDUX] : State of classroom Invitation modal
 * @prop { hideClassroomInvitationModal } [REDUX] : f() to hide Classroom Invitation modal
 * @prop { showClassroomInvitationModal } [REDUX] : f() to show Classroom Invitation modal
 */
class ClassroomMemberPage extends React.Component {
  static async getInitialProps({ query: { id } }) {
    return {
      isMember: 1,
      classroomID: id,
      classroomName: 'Introduction to Computer Science'
    }
  }

  render() {
    const {
      isMember,
      classroomID,
      classroomName,
      hideClassroomInvitationModal,
      showClassroomInvitationModal,
      isClassroomInvitationModalShowing
    } = this.props

    return !isMember ? (
      Router.push(CLASSROOM_PAGE)
    ) : (
      <div>
        <Head>
          <title>สมาชิก - {classroomName} | LEARNSPACE</title>
        </Head>
        <AuthenticatedLayout>
          <ClassroomInvitationModal
            classroomID={classroomID}
            isShowing={isClassroomInvitationModalShowing}
            hideClassroomInvitationModal={hideClassroomInvitationModal}
          />
          <ClassroomHeaderPanel
            classroomID={classroomID}
            classroomName={classroomName}
          />
          <Container marginTop="10em">
            <Card fluidWidth textCenter padding="1em" marginTop="1em">
              <Button primary onClick={showClassroomInvitationModal}>
                เพิ่มสมาชิกใหม่
              </Button>
            </Card>
            <ClassroomMemberPanel />
            <ClassroomActivityPanel />
          </Container>
        </AuthenticatedLayout>
      </div>
    )
  }
}

ClassroomMemberPage.propTypes = {
  isClassroomInvitationModalShowing: PropTypes.bool.isRequired,
  hideClassroomInvitationModal: PropTypes.func.isRequired,
  showClassroomInvitationModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  isClassroomInvitationModalShowing: state.isClassroomInvitationModalShowing
})

const mapDispatchToProps = dispatch => ({
  hideClassroomInvitationModal: () => dispatch(hideClassroomInvitationModal()),
  showClassroomInvitationModal: () => dispatch(showClassroomInvitationModal())
})

export default withData(
  connect(mapStateToProps, mapDispatchToProps)(ClassroomMemberPage)
)
