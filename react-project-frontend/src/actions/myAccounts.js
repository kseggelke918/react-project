//sync action creators

export const setMyAccounts = (accounts) => {
    return {
        type: "SET_MY_ACCOUNTS",
        accounts 
    }
}

export const clearTrips = () => {
    return {
        type: 'CLEAR_TRIPS'
    }
}

export const addAccount = account => {
    return {
        type: 'ADD_ACCOUNT',
        account
    }
}

// async action creators - have to wait for something to happen to update store

export const getMyAccounts = (user) => {
    return dispatch => {
        return fetch(`http://localhost:3000/api/v1/users/${user.data.id}/accounts`, {
            credentials: 'include', 
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setMyAccounts(response.data))
            }
        })
    }
}

// this will return a function that takes dispatch
export const createAccount = accountData => {
    console.log(accountData)
    // const user = state.currentUser.id
    return dispatch => {
        
        return fetch(`http://localhost:3000/api/v1/users/${accountData.user_id}/accounts`, {
        credentials: 'include',    
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: accountData
        })
        .then( r => r.json())
        .then(console.log)
        .catch(console.log)
    }
}