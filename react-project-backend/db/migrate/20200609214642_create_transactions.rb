class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.float :amount
      t.string :debit_credit
      t.string :merchant
      t.string :account_id
      t.string :integer
      t.datetime :date

      t.timestamps
    end
  end
end
