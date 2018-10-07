import React from 'react'
import {connect} from 'react-redux'

function Component({count, increment, decrement}) {
  return (
    <div>
      <button onClick={decrement}>-</button>
      Count {count}
      <button onClick={increment}>+</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.count
})
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({type: 'INCREMENT'}),
  decrement: () => dispatch({type: 'DECREMENT'})
})
export default connect(mapStateToProps, mapDispatchToProps)(Component)
