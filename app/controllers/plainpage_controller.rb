class PlainpageController < ApplicationController

  def index
    #other alternatives are
    # flash[:warn ] = "Israel don't quite like warnings"
    #flash[:danger ] = "Naomi let the dog out!"
    if current_user.is_super_admin?
    	@users = User.all
    elsif current_user.is_company_admin?
    	@users = current_user.descendants
    else
    	@users = current_user.root.descendants
    end
  end

end
