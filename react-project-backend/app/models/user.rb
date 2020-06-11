class User < ApplicationRecord
  has_many :accounts 
  has_many :transactions, through: :accounts
  validates :name, presence: true 
  has_secure_password
end
