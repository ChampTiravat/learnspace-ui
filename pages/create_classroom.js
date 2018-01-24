import React from 'react'

import CreateClassroomForm from '../core/components/CreateClassroomPage/CreateClassroomForm'
import AuthenticatedLayout from '../core/components/Layout/AuthenticatedLayout'
import Container from '../core/components/Container'
import Wallpaper from '../core/components/Wallpaper'
import withData from '../core/withData'

const CreateClassroomPage = () => (
  <AuthenticatedLayout>
    <Container transparent>
      <CreateClassroomForm />
    </Container>
  </AuthenticatedLayout>
)

export default withData(CreateClassroomPage)
