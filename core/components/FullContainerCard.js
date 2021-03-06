import React from 'react'
import PropTypes from 'prop-types'

import Card, { Header, Body } from './Card'

/**
 * @name FullContainerCard
 * @desc A Card component with a full width
 */
const FullContainerCard = props => (
  <Card fluidWidth {...props}>
    <Header>{props.header}</Header>
    <Body
      height="590px"
      style={{
        textAlign: 'center',
        background: '#efefef',
        paddingTop: '2em',
        paddingBottom: '2em'
      }}
    >
      {props.children}
    </Body>
  </Card>
)

FullContainerCard.propTypes = {
  header: PropTypes.string.isRequired
}

export default FullContainerCard
