class CreateTransactionLogs < ActiveRecord::Migration
  def change
    create_table :transaction_logs do |t|
      t.float :amount, default: 0.0
      t.float :pre_balance, default: 0.0
      t.float :new_balance, default: 0.0
      t.references :transaction, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
