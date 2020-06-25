import React from 'react'

const AccountCard = ({ account }) => {
    let transactions = account.attributes.transactions
    const trans = transactions.map(t => (<p key={t.id}>{t.merchant} - ${t.amount} - {t.debit_credit}</p>))
    
    console.log("the account card trans value is", trans)
    return (
        
        <div> 
            <h5>Account Number: {account.attributes.acct_number}</h5>
            <h5>Account Type: {account.attributes.acct_type}</h5>
            <h5>Balance: ${account.attributes.balance}</h5>
            <br></br>
            <h5>Transactions: {trans}</h5>


        </div>
        
    )
}

export default AccountCard


// const myAccounts = props.accounts.map(a => (<p key={a.id}><Link to={`/accounts/${a.id}`}>{a.attributes.acct_number} - {a.attributes.acct_type}</Link></p>))
