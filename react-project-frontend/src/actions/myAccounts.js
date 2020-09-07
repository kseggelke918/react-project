import { resetNewAccountForm } from './newAccountForm'

export const setMyAccounts = (accounts) => {
    return {
        type: "SET_MY_ACCOUNTS",
        accounts 
    }
}

export const clearAccounts = () => {
    return {
        type: 'CLEAR_ACCOUNTS'
    }
}

export const addAccount = account => {
    return {
        type: 'ADD_ACCOUNT',
        account
    }
}

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
                dispatch(addAccount(response.data))
                dispatch(resetNewAccountForm())
                history.push(`/accounts/${response.data.id}`)
            }
            
        })
    }
}