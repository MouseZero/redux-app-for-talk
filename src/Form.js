import React from 'react'
import InputField from './InputField'
import {withRouter} from 'react-router'

const style = ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

const linkTo = (history, link) => () => history.push(link)

function Form ({history}) {
  return (
    <div>
      <InputField
        label="What"
        name="what"
      />
      <InputField
        label="Where"
        name="where"
      />
      <div style={style.buttonContainer}>
        <buttom
          className="btn btn-secondary"
          onClick={linkTo(history, '/user')}
        >
          back
        </buttom>
        <button
          className="btn btn-primary"
          onClick={linkTo(history, '/')}
        >
          submit
        </button>
      </div>
    </div>
  )
}

export default withRouter(Form)
