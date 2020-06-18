const initialState = {
    acct_tpe: "", 
    acct_number: "", 
    balance: ""
}

export default (state=initialState, action) => {
    switch (action.type) {
        case 'UPDATE_NEW_ACCOUNT_FORM': 
            return action.formData
        case 'RESET_NEW_ACCOUNT_FORM':
            return initialState
        default: 
            return state
    }
}