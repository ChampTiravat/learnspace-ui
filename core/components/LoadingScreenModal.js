import React from 'react'

import { ModalBackground } from './Modal'

const LoadingScreenModal = ({ isLoading }) => (
  <ModalBackground show={isLoading}>
    <h1>Loading</h1>
  </ModalBackground>
)

export default LoadingScreenModal
