import React from 'react'
import Head from 'next/head'

import UnAuthenticatedLayout from '../core/components/Layout/UnAuthenticatedLayout'
import RegisterForm from '../core/components/RegisterPage/RegisterForm'
import Container from '../core/components/Container'
import Wallpaper from '../core/components/Wallpaper'
import withData from '../core/withData'

const RegisterPage = () => [
  <Head>
    <title>สมัครสมาชิกเพื่อเข้าใช้งาน | LEARNSPACE</title>
  </Head>,
  <UnAuthenticatedLayout>
    <Wallpaper pageName="register">
      <Container transparent>
        <RegisterForm />
      </Container>
    </Wallpaper>
  </UnAuthenticatedLayout>
]

export default withData(RegisterPage)
