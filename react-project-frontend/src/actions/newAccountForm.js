
export const updateNewAccountForm = (name, value) => {
    const formData = { name, value }
    return {
        type: "UPDATE_NEW_ACCOUNT_FORM", 
        formData
    }
}

export const resetNewAccountForm = () => {
    return {
        type: "RESET_NEW_ACCOUNT_FORM", 
    }
}