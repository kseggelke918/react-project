class User < ApplicationRecord
  has_many :accounts 
  has_many :transactions, through: :accounts

  validates :name, :username, presence: true 
  validates :username, uniqueness: true 

  has_secure_password
end
