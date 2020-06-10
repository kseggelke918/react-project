class Account < ApplicationRecord
    has_many :transactions
    belongs_to :user 
    validates :acct_number, :balance, presence: true 

    def adjust_balance(transaction)
        if transaction.debit_credit == 'credit'
            self.balance = self.balance + transaction.amount
            self.save
        elsif 
            self.balace = self.balance - transaction.amount 
            self.save 
        end 
    end 
end
