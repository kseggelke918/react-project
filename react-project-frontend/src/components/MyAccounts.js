import React from 'react'
import AccountCard from './AccountCard.js'
import { connect } from 'react-redux'

// responsible for showing individual account 
const displayAccounts = (props) => {

    const accountCards = props.accounts.map(a => <AccountCard account={a} key={a.id} />)
    return (
        accountCards.length > 0 ? accountCards : "no accounts to display"
    )
}

//get array of myAccounts from state of the store
//mapStateToProps returns an object with whatever keys we want for props
const mapStateToProps = state => {
    return {
        accounts: state.myAccounts
    }
}

// connect is a function that returns another function
export default connect(mapStateToProps)(displayAccounts)