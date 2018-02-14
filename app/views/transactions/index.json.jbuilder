json.array!(@transactions) do |transaction|
  json.extract! transaction, :id, :amount, :type, :user_id
  json.url transaction_url(transaction, format: :json)
end
