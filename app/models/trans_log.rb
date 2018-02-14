class TransLog < ActiveRecord::Base
  belongs_to  :payment, foreign_key: "transaction_id", class_name: "Transaction"
  belongs_to :user
end
