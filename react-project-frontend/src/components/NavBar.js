import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout.js'


class NavBar extends React.Component {
    render() {
      
      const {currentUser, loggedIn} = this.props
      return (
      <div className="NavBar">
          <NavLink exact to="/accounts/new">Open Accounts   |</NavLink>
          <NavLink exact to="/accounts">   View Accounts   |</NavLink>
          <NavLink exact to="/">   Home</NavLink>
          <br></br>
          <br></br>
          {currentUser ? <Logout /> : ""} 
          {loggedIn ? <h3 className="welcome">Welcome, {currentUser.data.attributes.name}!</h3> : ""}
            

        </div>
      ) 
    }

  }
  const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }

export default connect(mapStateToProps)(NavBar)