const initialState = {
    acct_type: "", 
    acct_number: "", 
    balance: ""
}

export default (state=initialState, action) => {
    switch (action.type) {
        case 'UPDATE_NEW_ACCOUNT_FORM': 
            return {
                // spread state and add in what changed
                ...state, 
                [action.formData.name]: action.formData.value
            }
        case 'RESET_NEW_ACCOUNT_FORM':
            return initialState
        default: 
            return state
    }
}