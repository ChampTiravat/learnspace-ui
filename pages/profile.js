import React from 'react'
import Head from 'next/head'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'

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
 */
class ProfilePage extends React.Component {
  componentDidMount() {
    if (process.browser) {
      this.props.data.refetch & this.props.data.refetch()
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps
  }

  render() {
    const { loading, user } = this.props.data
    return (
      <div>
        <Head>
          <title>
            {!loading ? `${user.fname} ${user.lname}` : 'loading ...'} |
            LEARNSPACE
          </title>
        </Head>
        <AuthenticatedLayout>
          <Container>
            <Panel left width="40">
              {loading ? (
                <ProfileInfoPanel loading={loading} />
              ) : (
                <ProfileInfoPanel
                  email={user.email}
                  career={user.career}
                  address={user.address}
                  username={user.username}
                  profilePicture={user.profilePicture}
                  realName={`${user.fname} ${user.lname}`}
                />
              )}
            </Panel>
            <Panel right width="60">
              {loading ? (
                <ClassroomsList loading={loading} />
              ) : (
                <ClassroomsList classrooms={user.classrooms} height="700px" />
              )}
            </Panel>
          </Container>
          <ProfileActivityPanel />
        </AuthenticatedLayout>
      </div>
    )
  }
}

ProfilePage.propTypes = {
  data: PropTypes.object.isRequired
}

const USER_PROFILE_QUERY = gql`
  query {
    user(_id: "5a58d7f2033e2931e026fec2") {
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
  }
`
export default withData(graphql(USER_PROFILE_QUERY)(ProfilePage))
