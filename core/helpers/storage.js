/** =================================================================
 * @name saveState()
 * @desc Save Redux state into localStorage as a JSON string
 * @return
 ==================================================================== */
export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('store', serializedState)
  } catch (error) {
    console.log(error.message)
  }
}

/** =================================================================
 * @name loadState()
 * @desc Load Redux state and from the localStorage parse it
 * @return object
 ==================================================================== */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('store')
    if (serializedState === null) {
      return undefined
    } else {
      return JSON.parse(serializedState)
    }
  } catch (error) {
    return undefined
  }
}
