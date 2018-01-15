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

class ProfilePage extends React.Component {
  static async getInitialProps({ query }) {
    // return { id: query.id }
  }

  render() {
    const { loading, user } = this.props.data
    return [
      <Head key={1}>
        {loading ? (
          <title>loading...</title>
        ) : (
          <title>{`${user.fname} ${user.lname}`} | LEARNSPACE</title>
        )}
      </Head>,
      <AuthenticatedLayout key={2}>
        <Container>
          <Panel left width="40">
            <ProfileInfoPanel
              realName={!loading ? `${user.fname} ${user.lname}` : ''}
              username={!loading ? user.username : ''}
              email={!loading ? user.email : ''}
              address={!loading ? user.address : ''}
              career={!loading ? user.career : ''}
            />
          </Panel>
          <Panel right width="60">
            <ClassroomsList
              classrooms={!loading ? user.classrooms : []}
              height="700px"
            />
          </Panel>
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
  query {
    user(_id: "5a58d7f2033e2931e026fec2") {
      _id
      fname
      lname
      email
      address
      username
      career
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
