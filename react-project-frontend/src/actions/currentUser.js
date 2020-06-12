
// sync action creators - return plain js objects
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user: user 
    }
}

//async action creators 

//request to backend to login
export const login = credentials => {
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/login', {
            method: "POST", 
            headers: {
                'Content-Type': 'applicaton/json'
            },
            body: JSON.stringify(credentials)
        })
    }    
}