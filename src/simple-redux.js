const { createStore } = require('redux')

// Action //
action = {type: 'INCREMENT', add: 5}

// Reducer //
function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        number: (state.number + action.add)
      })
    default:
      return state
  }
}

// Store //
const store = createStore(reducer, {number: 0})

// Listener //
function listener () {
  console.log('checking state', store.getState())
}
store.subscribe(listener)

// Dispatch //
store.dispatch(action)
store.dispatch(action)
