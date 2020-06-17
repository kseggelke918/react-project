//sync actions

export const setMyAccounts = (accounts) => {
    return {
        type: "SET_MY_ACCOUNTS",
        accounts 
    }
}

// async actions

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