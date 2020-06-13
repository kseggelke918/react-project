import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'

//loginForm has name and password in it
const Login = ({ loginForm, updateLoginForm }) => {
    //using same handler for username and password changes
    const handleChange = event => {
        // use event to dynamically grab name and value from event.target
        const { name, value } = event.target

        const updatedFormInfo = {
            //loginForm is current username & password
            ...loginForm, 
            // name could be username or password based on input
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    return (
        <form onSubmit={undefined}>
            <input placeholder="username" value={loginForm.username} name="username" type="text" onChange={handleChange}></input>
            <input placeholder="password" value={loginForm.password} name="password" type="password" onChange={handleChange}></input>
            <input type="submit" vaule="Log In"></input>
        </form>
    )
}

//connect state to store
// allows you to use these as props
// gives argument coming to this component that looks like {username: "katie", password: "password1"}
const mapStateToProps = state => {
    return {
        // grabs name and password together
        loginForm: state.loginForm
    }
}

//use shorthand of { updateLoginForm } instead of writing mapDispatchToProps
// updateLoginForm is now another prop
export default connect(mapStateToProps, { updateLoginForm })(Login)