class User < ActiveRecord::Base
	# Include default devise modules. Others available are:
	# :confirmable, :lockable, :timeoutable and :omniauthable
	has_ancestry
	attr_accessor :referral_code
	devise :database_authenticatable,
				 :recoverable, :rememberable, :trackable, :validatable
	enum role_id: [:Member, :"Company Admin", :"Super Admin"]

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
end
