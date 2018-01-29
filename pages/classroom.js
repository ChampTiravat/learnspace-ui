import React from 'react'
import Head from 'next/head'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'

import ClassroomActivityPanel from '../core/components/ClassroomPage/ClassroomActivityPanel'
import ClassroomHeaderPanel from '../core/components/ClassroomPage/ClassroomHeaderPanel'
import ClassroomInfoPanel from '../core/components/ClassroomPage/ClassroomInfoPanel'
import ClassroomPreview from '../core/components/ClassroomPage/ClassroomPreview'
import AuthenticatedLayout from '../core/components/Layout/AuthenticatedLayout'
import LoadingIcon from '../core/components/LoadingIcon'
import Container from '../core/components/Container'
import PostsList from '../core/components/PostsList'
import Panel from '../core/components/Panel'
import Card from '../core/components/Card'
import withData from '../core/withData'

class ClassroomPage extends React.Component {
  static async getInitialProps({ query: { id } }) {
    return { id }
  }

  componentDidMount() {
    const { data } = this.props
    process.browser && data.refetch & data.refetch()
  }

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps
  }

  renderClassroomProfile = classroom =>
    !classroom
      ? null
      : [
          <Panel left width="40">
            <ClassroomInfoPanel
              thumbnail={classroom.thumbnail}
              courseOutline={classroom.outline}
            />
          </Panel>,
          <Panel right height="850px" width="60">
            <PostsList posts={classroom.posts} height="700px" />
          </Panel>,
          <ClassroomActivityPanel
            classroomID={classroom._id}
            classroomCreatorID={classroom.creator._id}
            currentUserID={this.props.activeUser._id}
          />
        ]

  renderClassroomPreview = classroom =>
    !classroom ? null : (
      <ClassroomPreview
        classroomID={classroom._id}
        subject={classroom.subject}
        instructor={classroom.creator.fname}
        description={classroom.description}
      />
    )

  renderClassroomHeaderPanel = classroom =>
    !classroom ? null : (
      <ClassroomHeaderPanel
        classroomID={classroom._id}
        classroomName={classroom.name}
      />
    )

  /**
   * @name renderTitleText()
   * @param classroom : classroom data
   * @desc Render Classroom information corresponding to a given ID
   */
  renderTitleText = classroom =>
    !classroom ? 'ไม่พบข้อมูลของห้องเรียน' : classroom.name || ''

  render() {
    const { loading, classroomProfile } = this.props.data

    const classroom =
      !loading && classroomProfile ? classroomProfile.classroom : null

    const isMember = true

    console.log(this.props.activeUser)

    return [
      <Head>
        <title>
          {loading ? 'loading ...' : this.renderTitleText(classroom)} |
          LEARNSPACE
        </title>
      </Head>,
      <AuthenticatedLayout>
        {loading ? (
          <LoadingIcon />
        ) : !classroom ? (
          <Card padding="2em" marginTop="5em" textCenter>
            <h3>ไม่พบข้อมูลของห้องเรียน</h3>
          </Card>
        ) : (
          [
            this.renderClassroomHeaderPanel(classroom),
            <Container marginTop="10em">
              {isMember
                ? this.renderClassroomProfile(classroom)
                : this.renderClassroomPreview(classroom)}
            </Container>
          ]
        )}
      </AuthenticatedLayout>
    ]
  }
}

ClassroomPage.propTypes = {
  activeUser: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

const CLASSROOM_PROFILE_QUERY = gql`
  query classroomProfile($_id: String!) {
    classroomProfile(_id: $_id) {
      classroom {
        _id
        name
        description
        subject
        thumbnail
        creator {
          _id
        }
        outline {
          title
          passed
        }
        posts {
          _id
          title
        }
      }
      err {
        message
      }
    }
  }
`

const mapStateToProps = state => ({
  activeUser: state.user
})

export default compose(
  withData,
  connect(mapStateToProps, null),
  graphql(CLASSROOM_PROFILE_QUERY, {
    options: ({ id }) => ({ variables: { _id: id } })
  })
)(ClassroomPage)
