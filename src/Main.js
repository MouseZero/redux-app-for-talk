import React from 'react'
import {withRouter} from 'react-router'

const style = ({
  titleContainer: {
    textAlign: 'center',
    marginBottom: '5rem'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
})

const linkToUserPage = (history) => () => {
  history.push('/user')
}

function Main({count, increment, decrement, history}) {
  return (
    <div style={style.titleContainer}>
      <h1>Redux Talk Example</h1>
      <div style={style.buttonContainer}>
        <button onClick={linkToUserPage(history)} className="btn btn-primary">Continue</button>
      </div>
    </div>
  )
}

export default withRouter(Main)
