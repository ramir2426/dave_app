class AddPercentageToUsers < ActiveRecord::Migration
  def change
    add_column :users, :percentage, :float, default: 0.0
  end
end
