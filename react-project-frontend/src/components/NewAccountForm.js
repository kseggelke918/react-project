import React from 'react'
import { connect } from 'react-redux'
import { updateNewAccountForm } from '../actions/newAccountForm.js'

const NewAccountForm = () => {
    
    const handleChange = (event) => {
        event.preventDefault()
        //grab name and value from event.target
        const { name, value } = event.target
        //update newAccountForm using action creator
        updateNewAccountForm(name, value)
    }

    return (
    <form>
        <input placeholder="account type" name="acctType" value={""} onChange={handleChange} />
        <input placeholder="balance" name="balance" value={""} onChange={handleChange} />
        <input type="submit" value="Open Account"/>
    </form>
    )
}

const mapStateToProps = state => {
    return {
        accountType: state.acct_type, 
        accountNumber: state.acct_number,
        balance: state.balance
    }
}

export default connect(mapStateToProps, { updateNewAccountForm })(NewAccountForm)