import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'

const Login = (props) => {
    return (
        <form onSubmit={}>
            <input placeholder="username" value={props.username} name="username" type="text" onChange={props.updateLoginForm}></input>
            <input placeholder="password" value={props.password} name="password" type="password" onChange={props.updateLoginForm}></input>
            <input type="submit" vaule="Log In"></input>
        </form>
    )
}

//connect state to store
// allows you to use these as props
// gives argument coming to this component that looks like {username: "katie", password: "password1"}
const mapStateToProps = state => {
    return {
        username: state.loginForm.username, 
        password: state.loginForm.password
    }
}

//use shorthand of { updateLoginForm } instead of writing mapDispatchToProps
// updateLoginForm is now another prop
export default connect(mapStateToProps, { updateLoginForm })(Login)