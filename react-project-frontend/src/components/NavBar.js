import React from 'react'
import { connect } from 'react-redux'
import Login from './Login.js'
import Logout from './Logout.js'

const NavBar = ({ currentUser }) => {
    return (
        <div>
            <h2></h2>
            {currentUser ? <Logout /> : <Login />}

        </div>
    )
}

//needs to know about current user so we can "welcome"
//gives current user prop
const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
  }

export default connect(mapStateToProps)(NavBar)