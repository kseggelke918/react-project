import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const displayAccounts = props => {
    const myAccounts = props.accounts.map(a => (<p key={a.id}><Link to={`/accounts/${a.id}`}>{a.attributes.acct_number} - {a.attributes.acct_type}</Link></p>))
    return (
        myAccounts.length > 0 ? myAccounts : "no accounts to display"
    )
  }

const mapStateToProps = state => {
    return { 
        accounts: state.myAccounts
    }
}

export default connect(mapStateToProps)(displayAccounts)