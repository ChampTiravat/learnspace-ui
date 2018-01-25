import {
  INITIALIZE_AUTHENTICATED_USER,
  DEINITIALIZE_USER
} from '../constants/actions/user'

/**
 * @name
 * @desc
 * @return
 */
export const initializeAuthenticatedUser = ({ _id, fname, lname, email }) => ({
  type: INITIALIZE_AUTHENTICATED_USER,
  payload: {
    _id,
    fname,
    lname,
    email
  }
})

/**
 * @name
 * @desc
 * @return
 */
export const deinitializeUser = () => ({
  type: DEINITIALIZE_USER
})
