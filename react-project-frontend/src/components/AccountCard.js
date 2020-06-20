import React from 'react'

const AccountCard = ({ account }) => {
    return (
        <div>
            <h5>Account Number: {account.attributes.acct_number}</h5>
            <h5>Account Type: {account.attributes.acct_type}</h5>
            <h5>Balance: ${account.attributes.balance}</h5>
            
        </div>
        
    )
}

export default AccountCard