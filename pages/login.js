import React from 'react'
import Head from 'next/head'

import UnAuthenticatedLayout from '../core/components/Layout/UnAuthenticatedLayout'
import LoginForm from '../core/components/LoginPage/LoginForm'
import Container from '../core/components/Container'
import Wallpaper from '../core/components/Wallpaper'
import withData from '../core/withData'

const LoginPage = () => [
  <Head>
    <title>ยืนยันตัวตนเพื่อเข้าใช้งาน | LEARNSPACE</title>
  </Head>,
  <UnAuthenticatedLayout>
    <Wallpaper pageName="login">
      <Container transparent>
        <LoginForm />
      </Container>
    </Wallpaper>
  </UnAuthenticatedLayout>
]

export default withData(LoginPage)
