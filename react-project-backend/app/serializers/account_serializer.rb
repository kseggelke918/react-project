class AccountSerializer
  include FastJsonapi::ObjectSerializer
  attributes :acct_number, :acct_type, :balance, :user_id
  has_many :transactions
  belongs_to :user
end
