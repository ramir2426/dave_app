class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  layout :layout_by_resource
  before_action :configure_permitted_parameters, if: :devise_controller?
  rescue_from ActionController::RoutingError, :with => :controller_exception  
  rescue_from ActiveRecord::RecordNotFound, :with => :active_record_error

  def controller_exception 
  # ExceptionNotifier::Notifier.exception_notification(request.env, exception).deliver_later     
    respond_to do |f|       
      f.html{ render :file => "errors/404", :status => 404 }      
      f.js{ render :partial => "errors/ajax_404", :status => 404 }  
      f.all {render :file => "errors/404", :status => 404}
    end  
  end 

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :role_id])
  end

  def layout_by_resource
    if devise_controller?
      "devise_layout"
    else
      "application"
    end
  end
  private
  def active_record_error(exception)     
  # ExceptionNotifier::Notifier.exception_notification(request.env, exception).deliver_later     
    respond_to do |f|       
      f.html{ render :file => "errors/404", :status => 404 }      
      f.js{ render :partial => "errors/ajax_404", :status => 404 }    
    end
  end
  def prepare_exception_notifier
    request.env["exception_notifier.exception_data"] = {
      :current_user => current_user
    }
  end

end
