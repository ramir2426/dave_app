class AddAdminPercentToUsers < ActiveRecord::Migration
  def change
    add_column :users, :admin_percent, :float, default: 0.0
  end
end
