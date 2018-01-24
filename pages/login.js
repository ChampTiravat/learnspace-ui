import React from 'react'

import UnAuthenticatedLayout from '../core/components/Layout/UnAuthenticatedLayout'
import LoginForm from '../core/components/LoginPage/LoginForm'
import Container from '../core/components/Container'
import Wallpaper from '../core/components/Wallpaper'
import withData from '../core/withData'

class LoginPage extends React.Component {
  render() {
    return (
      <UnAuthenticatedLayout>
        <Wallpaper pageName="login">
          <Container transparent>
            <LoginForm />
          </Container>
        </Wallpaper>
      </UnAuthenticatedLayout>
    )
  }
}

export default withData(LoginPage)
