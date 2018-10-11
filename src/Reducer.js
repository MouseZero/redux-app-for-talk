import merge from 'lodash.merge'

export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_FIELD':
      return merge({}, state, {
        fields: {
          [action.name]: action.value
        }
      })
    default:
      return state
  }
}
