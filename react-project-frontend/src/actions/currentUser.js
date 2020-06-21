import { resetLoginForm } from './loginForm.js'
import { resetSignupForm } from './signupForm.js'
import { getMyAccounts, clearAccounts } from './myAccounts.js'

// sync action creators - return plain js objects
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user: user 
    }
}

export const clearCurrentUser = () => {
    return {
        type: 'CLEAR_CURRENT_USER'
    }
}

//async action creators 

//request to backend to login
// credentials the username and password entered in from Login.js components
export const login = (credentials, history) => {
    //get dispatch from redux
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/login', {
            credentials: 'include',
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(r => r.json())
        // set current user with response back
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                //action creator to get {type: 'SET_CURRENT_USER', user: user}
                dispatch(setCurrentUser(response))
                dispatch(getMyAccounts(response))
                dispatch(resetLoginForm())
                history.push('/')
            }
        })
        .catch(console.log)
    }    
}

export const signup = (credentials, history) => {
    return dispatch => {
        const userInfo = {
            user: credentials
        }
        return fetch('http://localhost:3000/api/v1/signup', {
            credentials: 'include',
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response))
                dispatch(getMyAccounts(response))
                dispatch(resetSignupForm())
                history.push('/')
            }
        })
        .catch(console.log)
    }    
}

// clear session on backend
export const logout = () => {
    //return an action creator/function (w/ dispatch as arg)
    return (dispatch) => {
        //log out user on front end before fetch
        dispatch(clearCurrentUser())
        dispatch(clearAccounts())
        return fetch('http://localhost3000/api/v1/logout', {
           credientials: 'include', 
           method: 'DELETE' 
        })
    }
}


export const getCurrentUser = () => {
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/get_current_user', {
            credentials: 'include',
            method: "GET", 
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(r => r.json())
        // set current user with response back
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response))
                dispatch(getMyAccounts(response))
            }
        })
        .catch(console.log)
    }    
}