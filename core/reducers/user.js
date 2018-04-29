/** ==================================================================================
 * Actions
 ================================================================================== */
export const INITIALIZE_AUTHENTICATED_USER = 'INITIALIZE_AUTHENTICATED_USER'
export const DEINITIALIZE_USER = 'DEINITIALIZE_USER'

/** ==================================================================================
 * @type reducer
 * @desc Perform various types of user's actions
 * @return object
 ================================================================================== */
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

/** ==================================================================================
 * @name initializeAuthenticatedUser()
 * @desc Add user's information(extracted from JWT token) into Redux Store
 * @param { _id } : user ID
 * @param { fname } : user's firstname
 * @param { lname } : user's lastname
 * @param { email } : user's email
 * @return object
 ================================================================================== */
export const initializeAuthenticatedUser = ({ _id, fname, lname, email }) => ({
  type: INITIALIZE_AUTHENTICATED_USER,
  payload: {
    _id,
    fname,
    lname,
    email
  }
})

/** ==================================================================================
 * @name deinitializeUser
 * @desc Remove user's information from Redux Store(use this when signing-out)
 * @return
 ================================================================================== */
export const deinitializeUser = () => ({
  type: DEINITIALIZE_USER
})
