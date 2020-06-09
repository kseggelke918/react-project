class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :accounts do |t|
      t.integer :acct_number
      t.string :acct_type
      t.float :balance
      t.integer :user_id

      t.timestamps
    end
  end
end
