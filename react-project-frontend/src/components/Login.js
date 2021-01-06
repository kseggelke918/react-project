import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'

// loginForm has name and pw in it
const Login = ({ loginFormData, updateLoginForm, login, history }) => {
     //using same handler for username and password changes
    const handleChange = event => {
        // use event to dynamically grab name and value from event.target
        const { name, value } = event.target

        const updatedFormInfo = {
            //loginForm is current username & password
            ...loginFormData, 
            // name could be username or password based on input
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleChange}></input>
            <input placeholder="password" value={loginFormData.password} name="password" type="password" onChange={handleChange}></input>
            <input type="submit" value="Log In"></input>
        </form>
    )
}

//connect state to store
// allows you to use these as props
// gives argument coming to this component that looks like {username: "katie", password: "password1"}
const mapStateToProps = state => {
    return {
        // grabs name and password together
        loginFormData: state.loginForm
    }
}

//use shorthand of { updateLoginForm } instead of writing mapDispatchToProps
// updateLoginForm is now another prop with login function imported from actions/currentUser.js
export default connect(mapStateToProps, { updateLoginForm, login })(Login)