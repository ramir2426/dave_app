class ChangeColumnName < ActiveRecord::Migration
  def change
  	rename_column :transactions, :amountm, :amount
  	rename_column :transactions, :type, :trans_type
  end
end
