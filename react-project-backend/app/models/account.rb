class Account < ApplicationRecord
    has_many :transactions
    belongs_to :user 
    validates :acct_number, :balance, presence: true 
end
