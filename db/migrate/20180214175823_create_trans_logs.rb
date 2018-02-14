class CreateTransLogs < ActiveRecord::Migration
  def change
    create_table :trans_logs do |t|
      t.float :amount
      t.float :pre_balance
      t.float :new_balance
      t.references :transaction, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
