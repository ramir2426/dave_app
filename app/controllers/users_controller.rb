class UsersController < ApplicationController
	before_action :find_user_by_referral, only: [:create]
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
		byebug
		if @referral_user.nil?
			@user = User.new(user_params)
			if @user.save
				redirect_to super_admin_users_path if @user.is_super_admin?
				redirect_to company_admin_users_path if @user.is_company_admin?
				redirect_to members_users_path
			else
				redirect_to new_super_admin_users_path, notice: @user.errors.full_messages  if @user.is_super_admin?
				redirect_to new_company_admin_users_path, notice: @user.errors.full_messages  if @user.is_company_admin?
				redirect_to new_member_users_path, notice: @user.errors.full_messages  if @user.is_member?			
			end

		else
			@user = @referral_user.children.new(user_params) 
			if @user.save
				redirect_to super_admin_users_path if @user.is_super_admin?
				redirect_to company_admin_users_path if @user.is_company_admin?
				redirect_to members_users_path
			else
				redirect_to new_super_admin_users_path, notice: @user.errors.full_messages  if @user.is_super_admin?
				redirect_to new_company_admin_users_path, notice: @user.errors.full_messages  if @user.is_company_admin?
				redirect_to new_member_users_path, notice: @user.errors.full_messages  if @user.is_member?
			end 
		end
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

	def company_admin
		@users = User.where(role_id: 1)
	end

	def new_company_admin
		@user = User.new(role_id: 1)
	end

	def members
		@users = User.where(role_id: 0)
	end

	def new_member
		@user_id = params[:reff_user]
		@user = User.new(role_id: 0)
	end

	private
	def user_params
		params.require(:user).permit(:role_id, :current_password, :first_name, :last_name, :email, :password, :password_confirmation, :percentage)
	end

	def find_user_by_referral
      if params[:user][:referral_code].present?
        @referral_user = User.find_by_id(params[:user][:referral_code])

      end
      @referral_user 
    end
end
