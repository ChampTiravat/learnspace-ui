import React from 'react'
import Head from 'next/head'
import gql from 'graphql-tag'
import Router from 'next/router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'

import {
  showClassroomInvitationModal,
  hideClassroomInvitationModal
} from '../core/reducers/classroom-invitation-modal'

import ClassroomMemberPanel from '../core/components/ClassroomMemberPage/ClassroomMemberPanel'
import ClassroomActivityPanel from '../core/components/ClassroomPage/ClassroomActivityPanel'
import ClassroomHeaderPanel from '../core/components/ClassroomPage/ClassroomHeaderPanel'
import ClassroomInvitationModal from '../core/components/ClassroomInvitationModal'
import AuthenticatedLayout from '../core/components/Layout/AuthenticatedLayout'
import { CLASSROOM_PAGE } from '../core/constants/endpoints/ui'
import LoadingIcon from '../core/components/LoadingIcon'
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
      classroomID: id
    }
  }

  componentDidMount() {
    const { data } = this.props
    process.browser && data.refetch & data.refetch()
  }

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps
  }

  /**
   * @name renderTitleText()
   * @param classroomName [APOLLO] :  classroom name
   * @desc Render the name of a given classroom
   */
  renderTitleText = classroomName =>
    !classroomName ? 'ไม่พบข้อมูลผู้ของห้องเรียนนี้' : classroomName

  render() {
    const {
      data,
      classroomID,
      hideClassroomInvitationModal,
      showClassroomInvitationModal,
      isClassroomInvitationModalShowing
    } = this.props

    const classroomMembers = !data.loading ? data.classroomMembers : null

    if (!data.loading && !classroomMembers.isMember)
      return Router.push(`${CLASSROOM_PAGE}?id=${classroom._id}`)

    return (
      <div>
        <Head>
          <title>
            {data.loading ? 'loading ...' : this.renderTitleText(classroomMembers.classroom.name)} |
            LEARNSPACE
          </title>
        </Head>
        {data.loading ? (
          <AuthenticatedLayout>
            <LoadingIcon />
          </AuthenticatedLayout>
        ) : (
          <AuthenticatedLayout>
            <ClassroomInvitationModal
              classroomID={classroomMembers.classroom._id}
              isShowing={isClassroomInvitationModalShowing}
              hideClassroomInvitationModal={hideClassroomInvitationModal}
            />
            <ClassroomHeaderPanel
              classroomName={classroomMembers.classroom.name}
              classroomID={classroomMembers.classroom._id}
            />
            <Container marginTop="7em">
              <Card fluidWidth textCenter padding="1em" marginTop="1em">
                <Button primary onClick={showClassroomInvitationModal}>
                  เพิ่มสมาชิกใหม่
                </Button>
              </Card>
              <ClassroomMemberPanel classroomMembers={classroomMembers.members} />
              <ClassroomActivityPanel />
            </Container>
          </AuthenticatedLayout>
        )}
      </div>
    )
  }
}

ClassroomMemberPage.propTypes = {
  isClassroomInvitationModalShowing: PropTypes.bool.isRequired,
  hideClassroomInvitationModal: PropTypes.func.isRequired,
  showClassroomInvitationModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  data: PropTypes.object
}

const mapStateToProps = state => ({
  isClassroomInvitationModalShowing: state.classroomInvitationModal
})

const mapDispatchToProps = dispatch => ({
  hideClassroomInvitationModal: () => dispatch(hideClassroomInvitationModal()),
  showClassroomInvitationModal: () => dispatch(showClassroomInvitationModal())
})

const CLASSROOM_MEMBERS_QUERY = gql`
  query classroomMembers($classroomID: String!) {
    classroomMembers(classroomID: $classroomID) {
      isMember
      members {
        _id
        fname
        lname
        profilePicture
      }
      classroom {
        _id
        name
      }
      err {
        message
      }
    }
  }
`

export default compose(
  withData,
  connect(mapStateToProps, mapDispatchToProps),
  graphql(CLASSROOM_MEMBERS_QUERY, {
    options: ({ classroomID }) => ({ variables: { classroomID } })
  })
)(ClassroomMemberPage)
