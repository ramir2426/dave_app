class Transaction < ActiveRecord::Base
  belongs_to :user
  enum trans_types: [:Profit, :Loss]
end
