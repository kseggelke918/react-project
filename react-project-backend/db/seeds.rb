# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(name: 'Katie')
account = Account.create(acct_number: 12345, acct_type: 'checking', balance: 100.00)
transaction_one = Transaction.create(amount: 55.32, debit_credit: 'debit', merchant: 'amazon', date: Date.today, account_id: 1)
transaction_two = Transaction.create(amount: 10.00, debit_credit: 'credit', merchant: 'direct deposit', date: Date.today, account_id: 1)