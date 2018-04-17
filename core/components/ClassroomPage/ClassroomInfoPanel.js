import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { CLASSROOM_CHATROOM_PAGE } from '../../constants/endpoints/ui'
import { Button } from '../Button'
import Card from '../Card'

const ClassroomInfoPanelCard = Card.extend`
  margin: 1.5em auto 0 auto;
  padding-top: 2.5em;
  max-width: 480px;
  height: 650px;
`

const ClassroomThumbnailImage = styled.img`
  border-radius: 50%;
  border: none;
  margin: 0 auto;
  display: block;
  height: 250px;
  width: 250px;
`

const ClassroomCourseInfoContainer = styled.div`
  padding: 3em 3em 1em 3em;
  width: 100%;
`

const ClassroomCourseInfoHeading = styled.h2`
  color: ${p => p.theme.PRIMARY_COLOR};
  text-align: center;
  font-weight: 400;
`

const CourseOutlineItem = styled.li`
  font-size: 1.1em;
  font-weight: 300;
  color: ${p => (p.passed ? p.theme.PRIMARY_COLOR : '#777')};
`

const ClassroomPanelButtonsGroup = styled.div`
  text-align: center;
  margin: 1em auto;
`

const ClassroomInfoPanelWrapper = ({ children, thumbnail }) => (
  <ClassroomInfoPanelCard>
    <ClassroomThumbnailImage src={thumbnail} />
    {children}
  </ClassroomInfoPanelCard>
)

/**
 * @name ClassroomInfoPanel
 * @desc Showing classroom information
 * @prop { courseOutline } : Course Events
 * @prop { thumbnail } : Classroom thumbnail
 */
const ClassroomInfoPanel = ({ courseOutline, thumbnail }) => (
  <ClassroomInfoPanelWrapper thumbnail={thumbnail}>
    <ClassroomCourseInfoContainer>
      <ClassroomCourseInfoHeading>รายละเอียดหลักสูตร</ClassroomCourseInfoHeading>
      <ul>
        {courseOutline.map((event, i) => (
          <CourseOutlineItem key={i} passed={event.passed}>
            {event.title.length > 39 ? `${event.title.substr(0, 36)}...` : event.title}
          </CourseOutlineItem>
        ))}
      </ul>
    </ClassroomCourseInfoContainer>
    <ClassroomPanelButtonsGroup>
      <Button light>รายละเอียดของห้องเรียน</Button>
    </ClassroomPanelButtonsGroup>
  </ClassroomInfoPanelWrapper>
)

export default ClassroomInfoPanel
