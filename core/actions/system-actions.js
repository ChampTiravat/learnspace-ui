import {
  SHOW_LOADING_MODAL,
  HIDE_LOADING_MODAL,
  SHOW_ERROR_ALERT,
  HIDE_ERROR_ALERT
} from '../constants/actions'

/**
 * @name showLoadingModal()
 * @desc Show loading modal when performing GraphQL Mutation(s)
 */
export const showLoadingModal = () => ({
  type: SHOW_LOADING_MODAL
})

/**
 * @name hideLoadingModal()
 * @desc Hide loading modal after GraphQL Mutation(s) operation is done
 */
export const hideLoadingModal = () => ({
  type: HIDE_LOADING_MODAL
})

/**
 * @name showErrorAlert()
 * @desc Show error alert when GraphQL Mutation(s) has failed
 */
export const showErrorAlert = message => ({
  type: SHOW_ERROR_ALERT,
  payload: {
    show: true,
    message
  }
})

/**
 * @name hideErrorAlert()
 * @desc Hide loading modal after clicked on error alert
 */
export const hideErrorAlert = () => ({
  type: HIDE_ERROR_ALERT,
  payload: {
    show: false
  }
})
