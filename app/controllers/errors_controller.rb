class ErrorsController < ApplicationController
  	before_action :authenticate_user!
	def show
		render "#{status_code.to_s}", :status => status_code.to_i
	end
	protected
 
	def status_code
		params[:code] || 500
	end
end
