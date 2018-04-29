import React from 'react'
import Head from 'next/head'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import { graphql, compose } from 'react-apollo'

import ProfileActivityPanel from '../core/components/ProfilePage/ProfileActivityPanel'
import AuthenticatedLayout from '../core/components/Layout/AuthenticatedLayout'
import ProfileInfoPanel from '../core/components/ProfilePage/ProfileInfoPanel'
import ClassroomsList from '../core/components/ClassroomsList'
import LoadingIcon from '../core/components/LoadingIcon'
import Container from '../core/components/Container'
import Panel from '../core/components/Panel'
import Card from '../core/components/Card'
import withData from '../core/withData'

/**
 * @name ProfilePage
 * @desc Display a user's profile information depending on a given user ID
 * @prop { data } [APOLLO] : Apollo Client helpers
 * @prop { _id } [NEXTJS] : User ID, from getInitialProps()
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
    !user ? (
      <Card textCenter padding="2em" marginTop="5em">
        <h2>ไม่พบข้อมูลผู้ใช้งาน</h2>
      </Card>
    ) : (
      [
        <Panel left width="40">
          <ProfileInfoPanel
            email={user.email}
            career={user.career}
            address={user.address}
            username={user.username}
            profilePicture={user.profilePicture}
            realName={`${user.fname} ${user.lname || ''}`}
          />
        </Panel>,
        <Panel right width="60">
          <ClassroomsList _id={this.props._id} height="700px" />
        </Panel>
      ]
    )

  /**
   * @name renderTitleText()
   * @param user : User data
   * @desc Render user's firstname and lastname associated to their ID
   */
  renderTitleText = user => (!user ? 'ไม่พบข้อมูลผู้ใช้งาน' : `${user.fname} ${user.lname || ''}`)

  render() {
    const { loading, userProfile } = this.props.data
    const user = !loading && userProfile ? userProfile.user : null

    return [
      <Head key="profile_head">
        <title>{loading ? 'loading ...' : this.renderTitleText(user)} | LEARNSPACE</title>
      </Head>,
      <AuthenticatedLayout key="profile_content">
        <Container>
          {loading ? <LoadingIcon /> : <Container>{this.renderUserInfo(user)}</Container>}
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
