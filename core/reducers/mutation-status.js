import { SHOW_LOADING_MODAL, HIDE_LOADING_MODAL } from '../constants/actions'

export default (state = false, action) => {
  switch (action.type) {
    case SHOW_LOADING_MODAL:
      return true

    case HIDE_LOADING_MODAL:
      return false

    default:
      return state
  }
}
