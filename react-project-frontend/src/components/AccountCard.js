import React from 'react'

const AccountCard = ({ account }) => {
    console.log("this is account in account card", account)
    return (
        <div>
            <p>{account.attributes.acct_number} - {account.attributes.acct_type} - ${account.attributes.balance}</p>
        </div>
        
    )
}

export default AccountCard