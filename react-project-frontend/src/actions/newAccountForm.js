// sync actions

export const updateNewAccountForm = (name, value) => {
    const formData = { name, value }
    return {
        type: "UPDATE_NEW_ACCOUNT_FORM", 
        formData
        //action.formData will contain a name and a value
    }
}

export const resetNewAccountForm = () => {
    return {
        type: "RESET_NEW_ACCOUNT_FORM", 
    }
}