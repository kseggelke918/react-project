import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser.js'
import { withRouter } from 'react-router-dom'
//withRouter gives access to router props (like history)

const Logout = ({ logout, history }) => {
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            logout()
            history.push('/')
        }
        }>
            <input type="submit" value="Log Out"></input>
        </form>
    )
}

export default withRouter(connect(null, { logout })(Logout))