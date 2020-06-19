import { resetNewAccountForm } from './newAccountForm'

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
export const createAccount = (accountData, history) => {
    const userId = accountData.user_id.data.id
    return dispatch => {
        
        return fetch(`http://localhost:3000/api/v1/users/${userId}/accounts`, {
        credentials: 'include',    
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(accountData)
        })
        .then( r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                // add acct to store
                dispatch(addAccount(response.data))
                //reset form after submission
                dispatch(resetNewAccountForm())
                // re-route 
                history.push(`/accounts/${response.data.id}`)
            }
            
        })
        .then(console.log)
        .catch(console.log)
    }
}