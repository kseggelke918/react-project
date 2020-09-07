import React from 'react'
import { connect } from 'react-redux'
import { createAccount } from '../actions/myAccounts.js'
import { updateNewAccountForm } from '../actions/newAccountForm.js'

const NewAccountForm = ({acct_type, balance, user_id, updateNewAccountForm, createAccount, history}) => {
    const handleChange = (event) => {
        const { name, value } = event.target
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