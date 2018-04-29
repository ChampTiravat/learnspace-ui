export const SHOW_CLASSROOM_INVITATION_MODAL = 'SHOW_CLASSROOM_INVITATION_MODAL'
export const HIDE_CLASSROOM_INVITATION_MODAL = 'HIDE_CLASSROOM_INVITATION_MODAL'

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

/**
 * @name showClassroomInvitationModal
 * @desc return TRUE, in order to show the modal
 * @return Boolean
 */
export const showClassroomInvitationModal = () => ({
  type: SHOW_CLASSROOM_INVITATION_MODAL,
  payload: true
})

/**
 * @name hideClassroomInvitationModal
 * @desc return FALSE, in order to close the modal
 * @return Boolean
 */
export const hideClassroomInvitationModal = () => ({
  type: HIDE_CLASSROOM_INVITATION_MODAL,
  payload: false
})
