import React from 'react'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'

import { showLoadingModal, hideLoadingModal } from '../../actions/system-actions'
import { showErrorAlert } from '../../actions/system-actions'

import ClassroomInvitationItem from './ClassroomInvitationItem'
import Card, { Header, Body, Footer } from '../Card'
import LoadingIcon from '../LoadingIcon'
import { Button } from '../Button'

const ClassroomInvitationPanelCard = Card.extend`
  height: 650px;
  margin: 0 auto;
  max-width: 100%;
  padding-bottom: 2em;
`

const NotificationOriginPicture = styled.img`
  display: inline-block;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 1.5em;
`

class ClassroomInvitationsPanel extends React.Component {
  componentWillMount(nextProps) {
    return this.props !== nextProps
  }

  componentDidMount() {
    const { data } = this.props
    process.browser && data.refetch & data.refetch()
  }

  render() {
    const { showErrorAlert, showLoadingModal, hideLoadingModal, data } = this.props
    const { loading, userClassroomInvitations } = data

    const invitations =
      !loading && userClassroomInvitations ? userClassroomInvitations.invitations : null

    return (
      <ClassroomInvitationPanelCard>
        <Header>คำเชิญเข้าร่วมห้องเรียน</Header>
        <Body
          overflowY="auto"
          height="520px"
          style={{ textAlign: 'center', background: '#efefef' }}
        >
          {loading ? (
            // Loading
            <LoadingIcon />
          ) : !invitations.length || invitations.length < 1 ? (
            // Does not received any classroom invitations
            <Card padding="2em 4em" marginTop="10em" textCenter>
              <h3>คุณยังไม่ได้รับคำเชิญเข้าร่วมห้องเรียนใดๆ</h3>
            </Card>
          ) : (
            // Received some classroom invitaitons, then render them
            invitations.map(invitation => (
              <ClassroomInvitationItem
                key={invitation.classroomID}
                name={invitation.classroomName}
                thumbnail={invitation.thumbnail}
                classroomID={invitation.classroomID}
                showErrorAlert={showErrorAlert}
                showLoadingModal={showLoadingModal}
                hideLoadingModal={hideLoadingModal}
              />
            ))
          )}
        </Body>
        <Footer>
          <Button primary>ยอมรับทุกคำขอ</Button>
          <Button light marginLeft="1em">
            ปฏิเศษทุกคำขอ
          </Button>
        </Footer>
      </ClassroomInvitationPanelCard>
    )
  }
}

ClassroomInvitationsPanel.propTypes = {
  data: PropTypes.object
}

const USER_CLASSROOM_INVITATIONS_QUERY = gql`
  query userClassroomInvitations($_id: String!) {
    userClassroomInvitations(_id: $_id) {
      invitations {
        classroomName
        classroomID
        thumbnail
        issueDate
      }
      err {
        message
      }
    }
  }
`

const mapDispatchToProps = dispatch => ({
  showErrorAlert: message => dispatch(showErrorAlert(message)),
  showLoadingModal: () => dispatch(showLoadingModal()),
  hideLoadingModal: () => dispatch(hideLoadingModal())
})

export default compose(
  connect(null, mapDispatchToProps),
  graphql(USER_CLASSROOM_INVITATIONS_QUERY, {
    options: ({ userID }) => ({ variables: { _id: userID } })
  })
)(ClassroomInvitationsPanel)
