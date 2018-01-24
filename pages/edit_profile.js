import React from 'react'

import EditProfileForm from '../core/components/EditProfilePage/EditProfileForm'
import AuthenticatedLayout from '../core/components/Layout/AuthenticatedLayout'
import Container from '../core/components/Container'
import Wallpaper from '../core/components/Wallpaper'
import withData from '../core/withData'

const EditProfilePage = () => (
  <AuthenticatedLayout>
    <Container transparent>
      <EditProfileForm />
    </Container>
  </AuthenticatedLayout>
)

export default withData(EditProfilePage)
