import React from 'react'
import Head from 'next/head'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import { graphql, compose } from 'react-apollo'

import ProfileActivityPanel from '../core/components/ProfilePage/ProfileActivityPanel'
import AuthenticatedLayout from '../core/components/Layout/AuthenticatedLayout'
import ProfileInfoPanel from '../core/components/ProfilePage/ProfileInfoPanel'
import ClassroomsList from '../core/components/ClassroomsList'
import Container from '../core/components/Container'
import Panel from '../core/components/Panel'
import withData from '../core/withData'

/**
 * @name ProfilePage
 * @desc Display a user's profile information depending on a given user ID
 * @prop { data } [APOLLO] : Apollo Client helpers
 * @prop { _id } : User ID, from getInitialProps()
 */
class ProfilePage extends React.Component {
  static async getInitialProps({ query }) {
    return { _id: query.id }
  }

  componentDidMount() {
    const { data } = this.props
    process.browser && data.refetch & data.refetch()
  }

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps
  }

  /**
   * @name renderUserInfo()
   * @param user : User data
   * @desc Render information and classrooms associated to the user
   *  specified by their ID
   */
  renderUserInfo = user =>
    user ? (
      [
        <Panel left width="40">
          <ProfileInfoPanel
            email={user.email}
            career={user.career}
            address={user.address}
            username={user.username}
            profilePicture={user.profilePicture}
            realName={`${user.fname} ${user.lname}`}
          />
        </Panel>,
        <Panel right width="60">
          <ClassroomsList classrooms={user.classrooms} height="700px" />
        </Panel>
      ]
    ) : (
      <h1>User not found</h1>
    )

  /**
   * @name renderTitleText()
   * @param user : User data
   * @desc Render user's firstname and lastname associated to their ID
   */
  renderTitleText = user =>
    user ? `${user.fname} ${user.lname}` : 'ไม่พบข้อมูลผู้ใช้งาน'

  render() {
    const { loading, userProfile } = this.props.data
    const user = !loading ? userProfile.user : null

    return [
      <Head key="profile_head">
        <title>
          {loading ? 'loading ...' : this.renderTitleText(user)} | LEARNSPACE
        </title>
      </Head>,
      <AuthenticatedLayout key="profile_content">
        <Container>
          {loading ? <h1>Loading</h1> : this.renderUserInfo(user)}
        </Container>
        <ProfileActivityPanel />
      </AuthenticatedLayout>
    ]
  }
}

ProfilePage.propTypes = {
  data: PropTypes.object.isRequired
}

const USER_PROFILE_QUERY = gql`
  query userProfile($_id: String!) {
    userProfile(_id: $_id) {
      user {
        _id
        fname
        lname
        email
        address
        username
        career
        profilePicture
        classrooms {
          _id
          name
          description
          thumbnail
        }
      }
      err {
        message
      }
    }
  }
`
export default compose(
  withData,
  graphql(USER_PROFILE_QUERY, {
    options: ({ _id }) => ({ variables: { _id } })
  })
)(ProfilePage)
