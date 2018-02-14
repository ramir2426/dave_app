class UsersController < ApplicationController
	def show
		@user = User.find(params[:id])
	end

	def super_admin
		@users = User.where(role_id: 2)
	end

	def new_super_admin
		@user = User.new(role_id: 2)
	end
	def create
		@user = User.new(user_params)
		@user.save
		redirect_to super_admin_users_path
	end

	private
	def user_params
		params.require(:user).permit(:role_id, :current_password, :first_name, :last_name, :email, :password, :password_confirmation, :percentage)
	end
end
