class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :username
  has_many :accounts 
  has_many :transactions, through: :accounts
end
