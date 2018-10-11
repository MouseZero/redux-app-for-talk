import React from 'react'
import InputField from './InputField'
import {withRouter} from 'react-router'

const style = ({
  container: {
    maxWidth: '700px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

const linkTo = (history, link) => () => history.push(link)

function User ({history}) {
  return (
    <div style={style.container}>
      <h2>User Form</h2>
      <InputField
        label="User Name"
        name="username"
      />
      <InputField
        label="Email"
        name="email"
      />
      <InputField
        label="Password"
        type="password"
        name="password"
      />
      <div style={style.buttonContainer}>
        <button
          className="btn btn-secondary"
          onClick={linkTo(history, '/')}
        >
          back
        </button>
        <button
          className="btn btn-primary"
          onClick={linkTo(history, '/form')}
        >
          continue
        </button>
      </div>
    </div>
  )
}

export default withRouter(User)
