import React from 'react'

const NewAccountForm = () => {
    
    const handleChange = (event) => {
        //grab name and value from event.target
        const { name, value } = event.target
        //update newAccountForm using action creator
        updateNewAccountForm(name, value)
    }

    return (
    <form>
        <input placeholder="account type" name="acctType" value={"acctType"} onChange={handleChange} />
        <input placeholder="balance" name="balance" value={"balance"} onChange={handleChange} />
    </form>
    )
}

export default NewAccountForm