class TransactionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :amount, :debit_credit, :merchant, :date, :account_id
  belongs_to :account
  belongs_to :user
end
