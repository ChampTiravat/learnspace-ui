import React from 'react'
import styled from 'styled-components'

import Card from '../Card'

const DashboardPageHeading = styled.div`
  width: 550px;
  margin: 0.8em;
  padding: 0.4em;
  font-size: 1em;
  font-weight: 400;
  text-align: center;
  display: inline-block;
  color: ${p => p.theme.PRIMARY_COLOR};
`

/**
 * @name DashboardPageHeadingPanel
 * @desc Display/remind users about something or introducing new feature(s)
 */
const DashboardPageHeadingPanel = () => (
  <Card fluidWidth textCenter>
    <DashboardPageHeading>
      ห้องเรียนที่คุณได้สร้างหรือเข้าร่วม
    </DashboardPageHeading>
  </Card>
)

export default DashboardPageHeadingPanel
