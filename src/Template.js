import React from 'react'
import {Link} from 'react-router-dom'

const style = ({
  linkContainer: {
    display: 'flex',
    fontSize: '20px',
    justifyContent: 'space-evenly',
    padding: '0.5rem',
    borderBottom: 'solid 1px black'
  },
  mainContentContainer: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center'
  },
  mainContent: {
    backgroundColor: '#fff',
    minWidth: '700px',
    boxShadow: '0px 0px 1px 1px #ccc;'
  },
  backDrop: {
  }
})

function Template ({children}) {
  return (
    <div style={style.backDrop}>
      <div style={style.linkContainer}>
        <div><Link to="/">Main</Link></div>
        <div><Link to="/user">User</Link></div>
        <div><Link to="/form">Form</Link></div>
      </div>
      <div style={style.mainContentContainer}>
        <div style={style.mainContent}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Template
