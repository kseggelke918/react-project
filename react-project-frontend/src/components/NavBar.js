import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import Login from './Login.js'
import Logout from './Logout.js'

const NavBar = ({ currentUser, loggedIn }) => {
    return (
        <div className="NavBar">
          <NavLink exact activeClass to="/accounts/new">Open Accounts   |</NavLink>
          <NavLink exact activeClass to="/accouts">   View Accounts   |</NavLink>
          <NavLink exact activeClass to="/">   Home</NavLink>
          <br></br>
          <br></br>
          {currentUser ? <Logout /> : ""} 
          {loggedIn ? <h3>Welcome, {currentUser.data.attributes.name}!</h3> : ""}
            

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