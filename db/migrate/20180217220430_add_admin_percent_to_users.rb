class AddAdminPercentToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :admin_percent, :float, default: 0.0
  end
end
