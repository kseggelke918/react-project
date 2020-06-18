import React from 'react'
import { connect } from 'react-redux'
import { updateNewAccountForm } from '../actions/newAccountForm.js'

const NewAccountForm = ({accountType, balance, updateNewAccountForm, history}) => {
    
    const handleChange = (event) => {
        //grab name and value from event.target
        const { name, value } = event.target
        //update newAccountForm using action creator
        updateNewAccountForm(name, value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // handleSubmit(formData)
    }

    return (
    <form onSubmit={handleSubmit}>
        <input placeholder="account type" name="accountType" value={accountType} onChange={handleChange} />
        <input placeholder="balance" name="balance" value={balance} onChange={handleChange} />
        <input type="submit" value="Open Account"/>
    </form>
    )
}

const mapStateToProps = state => {
    return {
        accountType: state.acct_type, 
        balance: state.balance
    }
}

export default connect(mapStateToProps, { updateNewAccountForm })(NewAccountForm)