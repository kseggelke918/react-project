//sync actions

export const setMyAccounts = user => {
    return {
        type: "SET_MY_TRIPS",
        accounts: user.accounts 
    }
}

// async actions

export const getMyAccounts = (user) => {
    console.log(user.data.id)

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
                dispatch(setMyAccounts())
            }
        })
    }
}