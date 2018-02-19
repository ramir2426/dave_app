class AddColumnToTransLogs < ActiveRecord::Migration
  def change
    add_column :trans_logs, :trans_type, :integer
    add_column :trans_logs, :comment, :string
  end
end
