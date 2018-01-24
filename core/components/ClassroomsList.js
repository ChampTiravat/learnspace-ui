import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'

import { CLASSROOM_PAGE } from '../constants/endpoints/ui'
import ClassroomProfilePic from './ClassroomProfilePic'
import Card from './Card'

const ClassroomListItemWrapper = styled.div`
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 2em;
  padding-left: 4em;
  text-align: center;
  cursor: pointer;
`

const ClassroomListItemCard = Card.extend`
  margin-bottom: 1em;
  margin-left: 0;
  padding: 4em;
  max-width: 650px;
  box-shadow: none;
  transition: all 200ms ease-in;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`

const ClassroomListItemLabel = styled.div`
  width: 470px;
  h3 {
    color: ${p => p.theme.PRIMARY_COLOR};
    font-weight: 400;
    font-size: 1.3em;
    margin-bottom: 1em;
  }
  p {
    color: #777;
    font-weight: 300;
    font-size: 1.1em;
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
const ClassroomListItem = ({ _id, name, description, thumbnail }) => (
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
 * @desc Display a list of classroom in /dashboard and /profile
 * @prop { classrooms } : Array of classrooms
 * @prop { height } : A height(CSS) of the panel
 */
const ClassroomsList = ({ loading, classrooms, height }) => (
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
)

ClassroomsList.propTypes = {
  classrooms: PropTypes.array,
  height: PropTypes.string
}

ClassroomListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired
}

export default ClassroomsList
