import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


// responsible for showing individual account 
const displayAccounts = props => {
    console.log("In MyAccounts componenet props is ", props)
    const myAccounts = props.accounts.map(a => (<p key={a.id}><Link to={`/accounts/${a.id}`}>{a.attributes.acct_number} - {a.attributes.acct_type}</Link></p>))
    console.log("in myaccounts comp this is myAccounts variable", myAccounts)
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