import { SHOW_LOADING_MODAL, HIDE_LOADING_MODAL } from '../constants/actions'

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
