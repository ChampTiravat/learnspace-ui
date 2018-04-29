export const INITIALIZE_AUTHENTICATED_USER = 'INITIALIZE_AUTHENTICATED_USER'
export const DEINITIALIZE_USER = 'DEINITIALIZE_USER'

const defaultState = {
  _id: '',
  fname: '',
  lname: '',
  email: ''
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case INITIALIZE_AUTHENTICATED_USER:
      return action.payload

    case DEINITIALIZE_USER:
      return defaultState

    default:
      return state
  }
}

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
