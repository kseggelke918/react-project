import React from 'react'
import { connect } from 'react-redux'
import { createAccount } from '../actions/myAccounts.js'
import { updateNewAccountForm } from '../actions/newAccountForm.js'
// import newAccountForm from '../reducers/newAccountForm.js'
// this is importing the action creator that will be passed to redux connect function so it can be used as mapDispatchToProps

const NewAccountForm = ({acct_type, balance, user_id, updateNewAccountForm, createAccount, history}) => {
    const handleChange = (event) => {
        //grab name and value from event.target
        const { name, value } = event.target
        //update newAccountForm using action creator
        updateNewAccountForm(name, value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createAccount({ acct_type, balance, user_id }, history)
    }

    return (
    <form onSubmit={handleSubmit}>
        <input placeholder="account type" name="acct_type" value={acct_type} onChange={handleChange} />
        <input placeholder="balance" name="balance" value={balance} onChange={handleChange} />
        <input type="submit" value="Open Account"/>
    </form>
    )
}

const mapStateToProps = state => {
    return {
        acct_type: state.newAccountForm.acct_type, 
        balance: state.newAccountForm.balance,
        user_id: state.currentUser
    }
}

export default connect(mapStateToProps, { updateNewAccountForm, createAccount })(NewAccountForm)