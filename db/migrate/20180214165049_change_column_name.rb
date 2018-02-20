class ChangeColumnName < ActiveRecord::Migration[5.0]
  def change
  	rename_column :transactions, :amountm, :amount
  	rename_column :transactions, :type, :trans_type
  end
end
