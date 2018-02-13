class User < ActiveRecord::Base
	# Include default devise modules. Others available are:
	# :confirmable, :lockable, :timeoutable and :omniauthable
	devise :database_authenticatable, :registerable,
				 :recoverable, :rememberable, :trackable, :validatable
	enum role_id: [:Member, :"Company Admin", :"Super Admin"]

	def full_name
		"#{first_name} #{last_name}"
	end
end
