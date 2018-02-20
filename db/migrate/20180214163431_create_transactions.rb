class CreateTransactions < ActiveRecord::Migration[5.0]
  def change
    create_table :transactions do |t|
      t.float :amountm, null: false
      t.integer :type, null: false
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
