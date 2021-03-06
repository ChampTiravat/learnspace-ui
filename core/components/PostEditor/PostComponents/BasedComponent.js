import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { CircleButton } from '../../Button'

const TestComponentWrapper = styled.div`
  position: relative;
  margin-top: 2em;
  margin-bottom: 3em;
`

const BasedComponent = ({
  children,
  type,
  order,
  removePostComponent,
  showEditPostComponentModal
}) => (
  <TestComponentWrapper>
    <CircleButton
      danger
      position="absolute"
      left="-9.5em"
      type="button"
      top="0em"
      onClick={() => removePostComponent(order)}
    >
      -
    </CircleButton>
    <CircleButton
      primary
      position="absolute"
      type="button"
      left="-6em"
      top="0em"
      onClick={() => showEditPostComponentModal(type, order)}
    >
      /
    </CircleButton>
    {children}
  </TestComponentWrapper>
)

export default BasedComponent
