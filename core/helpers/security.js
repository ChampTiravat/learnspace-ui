import JWTDecode from 'jwt-decode'

import { REFRESH_TOKEN } from '../constants/security'

/**
 * @desc Check wether the current user is authenticated or not
 * @return Boolean
 */
export const validateToken = () => {
  if (!process.browser) {
    return true
  }

  const refreshToken = window.localStorage.getItem(REFRESH_TOKEN)

  if (!refreshToken || refreshToken === '') {
    return false //throw new Error('refreshToken not found')
  }

  try {
    // Get the token
    JWTDecode(refreshToken)
    return true
  } catch (err) {
    // User isn't authenticated
    return false
  }
}
