class AddPercentageToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :percentage, :float, default: 0.0
  end
end
