import React from 'react'
import AccountCard from './AccountCard.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { $CombinedState } from 'redux'

// responsible for showing individual account 
const displayAccounts = props => {
    console.log(props.accounts)
    const myAccounts = props.accounts.map(a => (<p key={a.id}><Link to={`/accounts/${a.id}`}>{a.attributes.acct_number} - {a.attributes.acct_type}</Link></p>))
    return (
        myAccounts.length > 0 ? myAccounts : "no accounts to display"
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