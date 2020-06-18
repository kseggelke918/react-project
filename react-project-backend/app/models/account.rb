class Account < ApplicationRecord
    has_many :transactions
    belongs_to :user 
    validates :balance, presence: true 

    def initialize(args = {})
        args[:acct_number] ||= account_number_generator
        super
    end 

    def adjust_balance(transaction)
        if transaction.debit_credit == 'credit'
            self.balance = self.balance + transaction.amount
            self.save
        elsif 
            self.balace = self.balance - transaction.amount 
            self.save 
        end 
    end 

    def account_number_generator
        acct_num = rand(111111..999999)
        
        while Account.exists?(acct_number: acct_num)
          acct_num = rand(111111..999999) 
        end 
        
        acct_num
        
      end 

end
