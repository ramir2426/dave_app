class AddAmountToUsers < ActiveRecord::Migration
  def change
    add_column :users, :amount, :float, default: 0.0
    add_column :users, :total_profit, :float, default: 0.0
    add_column :users, :total_loss, :float, default: 0.0
  end
end
