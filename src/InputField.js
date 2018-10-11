import React from 'react'
import {connect} from 'react-redux'

const style = ({
  inputField: {
    marginBottom: '1rem'
  }
})

function InputField ({label, type = 'text', name, fields, updateField}) {
  return (
    <div style={style.inputField}>
      <label>{label}</label>
      <input
        type={type}
        value={fields[name]}
        onChange={updateField(name)}
        className="form-control"
      />
    </div>
  )
}

const mapStateToProps = ({fields}) => ({
  fields: fields
})
const mapDispatchToProps = (dispatch) => ({
  updateField: (name) => (event) => {
    dispatch({
      type: 'SET_FIELD',
      name: name,
      value: event.target.value
    })
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(InputField)
