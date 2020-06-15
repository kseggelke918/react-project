import React from 'react'
import { connect } from 'react-redux'
import Login from './Login.js'
import Logout from './Logout.js'

const NavBar = ({ currentUser, loggedIn }) => {
    return (
        <div className="nav">
            {loggedIn ? <h3>Welcome, {currentUser.data.attributes.name}!</h3> : <h3>Please login</h3>}
            {currentUser ? <Logout /> : <Login />}

        </div>
    )
}

//needs to know about current user so we can "welcome"
//gives current user prop
const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }

export default connect(mapStateToProps)(NavBar)