import { SHOW_ERROR_ALERT, HIDE_ERROR_ALERT } from '../constants/actions'

export default (state = {}, action) => {
  switch (action.type) {
    case SHOW_ERROR_ALERT:
      return action.payload
    case HIDE_ERROR_ALERT:
      return action.payload
    default:
      return state
  }
}
