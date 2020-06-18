export default (state = [], action) => {

    switch (action.type) {
        case "SET_MY_ACCOUNTS":
            return action.accounts
        case "ADD_ACCOUNT":
            return state.concat(action.account)
        case 'CLEAR_TRIPS': 
            return []
        default:
            return state
    }
}