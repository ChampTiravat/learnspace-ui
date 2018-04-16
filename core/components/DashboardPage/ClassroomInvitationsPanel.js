import React from 'react'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'react-apollo'

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
  float: left;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 1.5em;
`

class ClassroomInvitationsPanel extends React.Component {
  houldComponentUpdate(nextProps) {
    return this.props !== nextProps
  }

  render() {
    const { loading, userClassroomInvitations } = this.props.data
    const invitations =
      !loading && userClassroomInvitations
        ? userClassroomInvitations.invitations
        : null

    return (
      <ClassroomInvitationPanelCard>
        <Header>คำเชิญเข้าร่วมห้องเรียน</Header>
        <Body overflowY="auto" height="520px">
          {loading ? (
            <LoadingIcon />
          ) : (
            invitations.map(invitation => <h4>{invitation.classroomName}</h4>)
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
        classroomId
        issueDate
      }
      err {
        message
      }
    }
  }
`

export default graphql(USER_CLASSROOM_INVITATIONS_QUERY, {
  options: ({ userID }) => ({ variables: { _id: userID } })
})(ClassroomInvitationsPanel)
