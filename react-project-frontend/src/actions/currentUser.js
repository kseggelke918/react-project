
// sync action creators - return plain js objects
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user: user 
    }
}

//async action creators 

//request to backend to login
// credentials the username and password entered in from Login.js components
export const login = credentials => {
    console.log(credentials)
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
        .then(response => response.json())
        // set current user with response back
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                //action creator to get {type: 'SET_CURRENT_USER', user: user}
                dispatch(setCurrentUser(response))
            }
        })
        .catch(console.log)
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
        .then(response => response.json())
        // set current user with response back
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response))
            }
        })
        .catch(console.log)
    }    
}