import React from 'react'

import { ModalBackground, ModalPanel } from './Modal'
import LoadingIcon from './LoadingIcon'

const LoadingScreenModal = ({ isLoading }) => (
  <ModalBackground show={isLoading}>
    <LoadingIcon style={{ margin: '5em auto' }} />
  </ModalBackground>
)

export default LoadingScreenModal
