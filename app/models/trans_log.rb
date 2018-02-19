class TransLog < ActiveRecord::Base
  belongs_to  :payment, foreign_key: "transaction_id", class_name: "Transaction"
  belongs_to :user
  enum trans_types: [:Deposit, :Withdraw]
end
