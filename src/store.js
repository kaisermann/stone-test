import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { throttle } from 'lodash-es'

import rootReducer from './ducks'

const middlewares = [applyMiddleware(thunk)]

function loadState() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

function saveState(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.log(err)
  }
}

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__())
}

/** Create the redux store with:
 * the combined reducers
 * state loaded from localStorage (if exists)
 * composed middlewares
 */

// localStorage.clear()
const store = createStore(rootReducer, loadState(), compose(...middlewares))

/** Save the state for each dispatch */
store.subscribe(throttle(() => saveState(store.getState()), 1000))

export default store
