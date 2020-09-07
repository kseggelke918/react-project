import React from 'react'

const AccountCard = ({ account }) => {
    if (account) {
        let transactions = account.attributes.transactions
        const transaction = transactions.map(t => (<p key={t.id}>{t.merchant} - ${t.amount} - {t.debit_credit}</p>))
  
    return (
        
        <div> 
            <h5>Account Number: {account.attributes.acct_number}</h5>
            <h5>Account Type: {account.attributes.acct_type}</h5>
            <h5>Balance: ${account.attributes.balance}</h5>
            <br></br>
            <h5>Transactions: {transaction.length > 0 ? transaction : "No Transactions to Display"}</h5>
        </div>
        
    )
    } else {
        return (
            <div>Looking for Account</div>
        )
    }   
}

export default AccountCard


