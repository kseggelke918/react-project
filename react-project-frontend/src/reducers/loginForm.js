const initialSate = {
    username: "",
    password: ""
}

export default (state = initialSate, action) => {
    switch (action.type) {
        case 'UPDATE_LOGIN_FORM': 
            return action.formData
        default:
            return state
    }
}