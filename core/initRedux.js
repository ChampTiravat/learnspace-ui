import { createStore, combineReducers, applyMiddleware } from 'redux'
import { loadState, saveState } from './helpers/storage'

import RootReducers from './reducers'

// Devtool Stuff.
let devtools = f => f

if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

// Get lasted persisted state from localStorage.
const persistStore = loadState()

const create = (initialState = {}) =>
  createStore(
    combineReducers({
      ...RootReducers
    }),
    persistStore,
    devtools
  )

// Initialize a blank Redux Store instance.
let reduxStore = null

export default initialState => {
  if (!process.browser) {
    return create(initialState)
  }

  // If store is empty, create a one.
  if (!reduxStore) {
    reduxStore = create(initialState)
  }

  // Save Redux State Tree to localStorage when there client dispatch an event.
  // Or, there're some changes in the state tree
  reduxStore.subscribe(() => {
    saveState(reduxStore.getState())
  })

  return reduxStore
}
