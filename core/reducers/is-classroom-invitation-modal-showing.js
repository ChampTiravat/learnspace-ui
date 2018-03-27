import {
  SHOW_CLASSROOM_INVITATION_MODAL,
  HIDE_CLASSROOM_INVITATION_MODAL
} from '../constants/actions/classroom-invitation'

/**
 * @desc Toggle add classroom invitation modal. Depending on this reducer's state
 */
export default (state = false, action) => {
  switch (action.type) {
    case SHOW_CLASSROOM_INVITATION_MODAL:
      return action.payload
    case HIDE_CLASSROOM_INVITATION_MODAL:
      return action.payload
    default:
      return state
  }
}
