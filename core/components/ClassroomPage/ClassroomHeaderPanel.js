import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { CLASSROOM_PAGE } from '../../constants/endpoints/ui'
import Card from '../Card'

const ClassroomHeaderCard = Card.extend`
  position: absolute;
  left: 0;
  max-width: 100%;
  padding: 2em;
  text-align: center;
`

const ClassroomNameHeading = styled.h1`
  color: ${p => p.theme.PRIMARY_COLOR};
  font-size: 1.7em;
  font-weight: 400;
  cursor: pointer;
`
/**
 * @name ClassroomHeaderPanel
 * @desc Display the details of the classroom
 * @prop classroomID : ID of the classroom, used to determine which classroom to query from DB
 * @prop classroomName : Name of the classroom
 */
const ClassroomHeaderPanel = ({ classroomID, classroomName }) => (
  <ClassroomHeaderCard>
    ห้องเรียน
    <Link href={{ pathname: CLASSROOM_PAGE, query: { id: classroomID } }} prefetch>
      <ClassroomNameHeading>{classroomName}</ClassroomNameHeading>
    </Link>
  </ClassroomHeaderCard>
)

ClassroomHeaderPanel.propTypes = {
  classroomID: PropTypes.string.isRequired,
  classroomName: PropTypes.string.isRequired
}

export default ClassroomHeaderPanel
