import {
  INITIALIZE_AUTHENTICATED_USER,
  DEINITIALIZE_USER
} from '../../core/constants/actions/user'

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
