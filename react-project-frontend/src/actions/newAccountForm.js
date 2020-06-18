// sync actions

export const updateNewAccountForm = (name, value) => {
    return {
        type: "UPDATE_NEW_ACCOUNT_FORM", 
        formData: { name, value }
        //action.formData will contain a name and a value
    }
}