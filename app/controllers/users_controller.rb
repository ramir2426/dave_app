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

	def edit
		@user = User.find_by_id(params[:id])
	end

	def update
		@user = User.find_by_id(params[:id])
		if params[:user][:password].blank?
			@user.update_without_password(user_params)
		else
			@user.update_attributes(user_params)
		end
		respond_to do |format|
			if @user.errors.blank?
				format.js
				format.html { redirect_to user_path(id: @user.id), notice: "User updated successfully." }
			else
				format.js
				format.html { render :edit }
			end
		end
		
	end

	private
	def user_params
		params.require(:user).permit(:role_id, :current_password, :first_name, :last_name, :email, :password, :password_confirmation, :percentage)
	end
end
