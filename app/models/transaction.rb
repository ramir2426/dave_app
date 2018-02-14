class Transaction < ActiveRecord::Base
  belongs_to :user
  has_many :trans_logs
  enum trans_types: [:Profit, :Loss]

  after_create  :create_transaction_logs

  def create_transaction_logs
  	transaction = self
  	@company_user = transaction.user
  	@total_amount =  transaction.amount
  	if transaction.trans_types == 0
  		if @company_user.percentage > 0
  			@admin = User.where(role_id: 2).first
  			amount = @total_amount*(user.percentage/100)
			@total_amount = @total_amount - amount
			@admin.trans_logs.create(amount: amount, pre_balance: @admin.amount, new_balance: (@admin.amount+amount), transaction_id: transaction.id )
  			@admin.update_attributes(amount: (@admin.amount+amount))
  		end
		@users = @company_user.descendants
		@users.each do |user|
			amount = @total_amount*(user.percentage/100)
			@total_amount = @total_amount - amount
			parent_user = user.parent
			parent_user.trans_logs.create(amount: amount, pre_balance: parent_user.amount, new_balance: (parent_user.amount+amount), transaction_id: transaction.id )
			parent_user.update_attributes(amount: (parent_user.amount+amount))
		end
  	else
  		if @company_user.percentage > 0
  			@admin = User.where(role_id: 2).first
  			amount = @total_amount*(user.percentage/100)
			@total_amount = @total_amount - amount
			@admin.trans_logs.create(amount: amount, pre_balance: @admin.amount, new_balance: (@admin.amount-amount), transaction_id: transaction.id )
  			@admin.update_attributes(amount: (@admin.amount-amount))
  		end
		@users = @company_user.descendants
		@users.each do |user|
			amount = @total_amount*(user.percentage/100)
			@total_amount = @total_amount - amount
			parent_user = user.parent
			parent_user.trans_logs.create(amount: amount, pre_balance: parent_user.amount, new_balance: (parent_user.amount-amount), transaction_id: transaction.id )
			parent_user.update_attributes(amount: (parent_user.amount-amount))
		end
  	end
  end
end
