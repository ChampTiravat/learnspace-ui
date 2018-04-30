/** ==================================================================================
 * Actions
 ================================================================================== */
export const INITIALIZE_POST_TO_EDIT = 'INITIALIZE_POST_TO_EDIT'
export const EDIT_POST_COMPONENT = 'EDIT_POST_COMPONENT'
export const REMOVE_COMPONENT = 'REMOVE_COMPONENT'
export const ADD_COMPONENT = 'ADD_COMPONENT'
export const RESET_POST = 'RESET_POST'

/** ==================================================================================
 * @type reducer
 * @desc Add new component into a post components list when creating/editing a new post
 * @return []
 ================================================================================== */
export default (state = [], action) => {
  switch (action.type) {
    case ADD_COMPONENT:
      return state.concat(action.payload)

    case EDIT_POST_COMPONENT:
      const { order, type, newData } = action.payload
      return state.reduce((totalItems, nextItem) => {
        if (nextItem.order === order && nextItem.type === type) {
          nextItem.data = newData
        }
        return totalItems.concat(nextItem)
      }, [])

    case REMOVE_COMPONENT:
      let counter = 0
      return state
        .filter(component => component.order !== action.payload.order)
        .reduce((totalComponent, nextComponent) => {
          nextComponent.order = counter++
          return totalComponent.concat(nextComponent)
        }, [])

    case RESET_POST:
      return []

    case INITIALIZE_POST_TO_EDIT:
      return state

    default:
      return state
  }
}

/** ==================================================================================
 * @name initializePost()
 * @desc Initialize a post with empty content
 * @return
 ================================================================================== */
export const initializePost = () => ({
  type: INITIALIZE_POST_TO_EDIT
})

/** ==================================================================================
 * @name editPostComponent()
 * @desc Edit an existing component in the receipe
 * @param { order } : Component rendering order
 * @param { type } : Component type
 * @param { newData } : New data for the component
 * @return object
 ================================================================================== */
export const editPostComponent = ({ order, type, newData }) => ({
  type: EDIT_POST_COMPONENT,
  payload: {
    order,
    type,
    newData
  }
})

/** ==================================================================================
 * @name removePostComponent()
 * @desc Remove a component from a post by specifying a rendering order and a type of the component
 * @param order : A component rendering order
 * @return object
 ================================================================================== */
export const removePostComponent = order => ({
  type: REMOVE_COMPONENT,
  payload: {
    order
  }
})

/** ==================================================================================
 * @name addNewPostComponent()
 * @desc Append a component to a post
 * @param { order } : A component rendering order
 * @param { type }  : Component type
 * @param { data }  : Component data associated to component type
 * @return object
 ================================================================================== */
export const addNewPostComponent = ({ order, type, data }) => ({
  type: ADD_COMPONENT,
  payload: {
    order,
    type,
    data
  }
})

/** ==================================================================================
 * @name resetPost()
 * @desc Remove every components from a post
 * @return
 ================================================================================== */
export const resetPost = () => ({
  type: RESET_POST
})
