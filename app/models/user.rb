class User < ActiveRecord::Base
	# Include default devise modules. Others available are:
	# :confirmable, :lockable, :timeoutable and :omniauthable
	has_ancestry
	has_many :transactions
	has_many :trans_logs
	attr_accessor :referral_code
	devise :database_authenticatable,
				 :recoverable, :rememberable, :trackable, :validatable
	enum role_id: [:Member, :"Company Admin", :"Super Admin"]
	before_save :manage_percent 

	def full_name
		"#{first_name} #{last_name}"
	end

	def is_super_admin?
		role_id == "Super Admin"
	end

	def is_company_admin?
		role_id == "Company Admin"
	end

	def is_member?
		role_id == "Member"
	end

	def manage_percent
		parent_user = self.parent
		if parent_user.blank? && self.percentage == 0.0
			self.percentage = 100 - self.admin_percent
		elsif parent_user.present? && parent_user.is_company_admin?
			parent_user.percentage = parent_user.percentage - self.percentage
			parent_user.save
		end	
	end
end