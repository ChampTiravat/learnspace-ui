import React from 'react'
import Link from 'next/link'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import styled from 'styled-components'

import { CLASSROOM_PAGE } from '../constants/endpoints/ui'
import ClassroomProfilePic from './ClassroomProfilePic'
import LoadingIcon from './LoadingIcon'
import Card from './Card'

const ClassroomListItemWrapper = styled.div`
  position: relative;
  text-align: center;
  padding-right: 2em;
  padding-bottom: 0;
  padding-left: 4em;
  cursor: pointer;
  padding-top: 0;
`

const ClassroomListItemCard = Card.extend`
  transition: all 200ms ease-in;
  margin-bottom: 1em;
  max-width: 650px;
  box-shadow: none;
  margin-left: 0;
  padding: 4em;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`

const ClassroomListItemLabel = styled.div`
  width: 470px;
  h3 {
    color: ${p => p.theme.PRIMARY_COLOR};
    margin-bottom: 1em;
    font-weight: 400;
    font-size: 1.3em;
  }
  p {
    font-weight: 300;
    font-size: 1.1em;
    color: #777;
    margin: 0;
  }
`

const ClassroomsListWrapper = styled.div`
  height: ${p => p.height || '600px'};
  margin-top: 1.5em;
  overflow-y: auto;
`

/**
 * @name ClassroomListItem
 * @desc Display a classroom item depending on a given ID
 * @prop { _id } : Classroom ID. Use this to generate a URL to the particular classroom
 * @prop { name } : Classroom name
 * @prop { description } : Classroom description
 * @prop { thumbnail } : Classroom thumbnail
 */
export const ClassroomListItem = ({ _id, name, description, thumbnail }) => (
  <Link href={{ pathname: CLASSROOM_PAGE, query: { id: _id } }} prefetch>
    <ClassroomListItemWrapper>
      <ClassroomListItemCard>
        <ClassroomListItemLabel>
          <h3>{name}</h3>
          <p>{description}</p>
        </ClassroomListItemLabel>
        <ClassroomProfilePic src={thumbnail} />
      </ClassroomListItemCard>
    </ClassroomListItemWrapper>
  </Link>
)

/**
 * @name ClassroomsList
 * @desc Display a list of classrooms in /dashboard and /profile
 * @prop { data } [APOLLO] : GraphQL Response(contained classroom items)
 * @prop { height } : A height(CSS) of the panel
 */
class ClassroomsList extends React.Component {
  componentDidMount() {
    const { data } = this.props
    process.browser && data.refetch & data.refetch()
  }

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps
  }

  render() {
    const {
      data: { loading, userClassrooms },
      height
    } = this.props

    const classrooms =
      !loading && userClassrooms ? userClassrooms.classrooms : null

    return !loading ? (
      <ClassroomsListWrapper height={height}>
        {!classrooms || !classrooms.length || classrooms.length === 0 ? (
          <Card padding="2em 4em" marginTop="3em" textCenter>
            <h3>คุณยังไม่ได้สร้าง หรือเข้าร่วมห้องเรียนใดๆ</h3>
          </Card>
        ) : (
          classrooms.map(classroom => (
            <ClassroomListItem
              _id={classroom._id}
              key={classroom._id}
              name={classroom.name}
              thumbnail={classroom.thumbnail}
              description={classroom.description}
            />
          ))
        )}
      </ClassroomsListWrapper>
    ) : (
      <LoadingIcon />
    )
  }
}

ClassroomsList.propTypes = {
  data: PropTypes.object.isRequired,
  height: PropTypes.string
}

ClassroomListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  key: PropTypes.string,
  name: PropTypes.string,
  thumbnail: PropTypes.string,
  description: PropTypes.string
}

const USER_CLASSROOMS_QUERY = gql`
  query userClassrooms($_id: String!) {
    userClassrooms(_id: $_id) {
      classrooms {
        _id
        name
        description
        thumbnail
      }
      err {
        message
      }
    }
  }
`

export default graphql(USER_CLASSROOMS_QUERY, {
  options: ({ _id }) => ({ variables: { _id } })
})(ClassroomsList)
