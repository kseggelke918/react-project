export default (state = [], action) => {
    switch (action.type) {
        case "SET_MY_ACCOUNTS":
            return action.accounts
        case 'CLEAR_TRIPS': 
            return []
        default:
            return state
    }
}