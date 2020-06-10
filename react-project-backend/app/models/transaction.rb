class Transaction < ApplicationRecord
    belongs_to :account
    belongs_to :user
    validates :amount, :debit_credit, presence: true 
    validates_inclusion_of :debit_credit, :in => ['debit', 'credit']
end
