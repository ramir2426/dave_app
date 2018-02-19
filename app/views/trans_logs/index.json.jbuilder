json.array!(@trans_logs) do |trans_log|
  json.extract! trans_log, :id, :amount, :pre_balance, :new_balance, :transaction_id, :user_id, :trans_type, :comment
  json.url trans_log_url(trans_log, format: :json)
end
