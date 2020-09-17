# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_one = User.create(name: 'Katie', username: 'katieS', password: "password")
user_two = User.create(name: 'Susie', username: 'susietest', password: 'password')
account_one = Account.create(acct_number: 12345, acct_type: 'checking', balance: 100.00, user_id: 1)
account_two = Account.create(acct_number: 98706, acct_type: 'savings', balance: 50.00, user_id: 2)
transaction_one = Transaction.create(amount: 55.32, debit_credit: 'debit', merchant: 'amazon', date: Date.today, account_id: 1, user_id: 1)
transaction_two = Transaction.create(amount: 10.00, debit_credit: 'credit', merchant: 'direct deposit', date: Date.today, account_id: 1, user_id: 1)
transaction_three = Transaction.create(amount: 10.00, debit_credit: 'debit', merchant: 'atm', date: Date.today, account_id: 2, user_id: 2)
transaction_four = Transaction.create(amount: 10.00, debit_credit: 'credit', merchant: 'direct deposit', date: Date.today, account_id: 2, user_id: 2)