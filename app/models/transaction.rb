class Transaction < ActiveRecord::Base
  belongs_to :user
  has_many :trans_logs
  enum trans_types: [:Profit, :Loss]

  after_create  :create_transaction_logs

  def create_transaction_logs
  	transaction = self
  	@company_user = transaction.user
  	@total_amount =  transaction.amount
    byebug
  	if transaction.trans_type == 0
      if @company_user.admin_percent > 0
        @admin = User.where(role_id: 2).first
        amount = @total_amount*(@company_user.admin_percent/100)
        @total_amount = @total_amount - amount
        @admin.trans_logs.create(amount: amount, pre_balance: @admin.amount, new_balance: (@admin.amount+amount), transaction_id: transaction.id )
        @admin.update_attributes(amount: (@admin.amount+amount))
      end
      amount = @total_amount*(@company_user.percentage/100)
      @company_user.trans_logs.create(amount: amount, pre_balance: @company_user.amount, new_balance: (@company_user.amount+amount), transaction_id: transaction.id )
      @company_user.update_attributes(amount: (@company_user.amount+amount))
      @company_user.children.each do |user|
        amount = @total_amount*(user.percentage/100)
        user.trans_logs.create(amount: amount, pre_balance: user.amount, new_balance: (user.amount+amount), transaction_id: transaction.id )
        user.update_attributes(amount: (@admin.amount+amount))
        nested_user_childern_profit(user, amount) if user.children.present?
      end
    else
      if @company_user.admin_percent > 0
        @admin = User.where(role_id: 2).first
        amount = @total_amount*(@company_user.admin_percent/100)
        @total_amount = @total_amount - amount
        @admin.trans_logs.create(amount: amount, pre_balance: @admin.amount, new_balance: (@admin.amount-amount), transaction_id: transaction.id )
        @admin.update_attributes(amount: (@admin.amount-amount))
      end
      amount = @total_amount*(@company_user.percentage/100)
      @company_user.trans_logs.create(amount: amount, pre_balance: @company_user.amount, new_balance: (@company_user.amount-amount), transaction_id: transaction.id )
      @company_user.update_attributes(amount: (@company_user.amount-amount))
      @company_user.children.each do |user|
        amount = @total_amount*(user.percentage/100)
        user.trans_logs.create(amount: amount, pre_balance: user.amount, new_balance: (user.amount-amount), transaction_id: transaction.id )
        user.update_attributes(amount: (@admin.amount-amount))
        nested_user_childern_loss(user, amount) if user.children.present?
      end
    end
  end

  def nested_user_childern_profit(parent_user, parent_amount)
    parent_user.children.each do |user|
      amount =  parent_amount*(user.percentage/100)
      user.trans_logs.create(amount: amount, pre_balance: user.amount, new_balance: (user.amount+amount), transaction_id: transaction.id )
      user.update_attributes(amount: (user.amount+amount))
      nested_user_childern_profit(user, amount) if user.children.present?
    end
  end

  def nested_user_childern_loss
    parent_user.children.each do |user|
      amount =  parent_amount*(user.percentage/100)
      user.trans_logs.create(amount: amount, pre_balance: user.amount, new_balance: (user.amount-amount), transaction_id: transaction.id )
      user.update_attributes(amount: (user.amount-amount))
      nested_user_childern_profit(user, amount) if user.children.present?
    end
  end
end
