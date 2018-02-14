class PlainpageController < ApplicationController

  def index
    #other alternatives are
    # flash[:warn ] = "Israel don't quite like warnings"
    #flash[:danger ] = "Naomi let the dog out!"
    if current_user.is_super_admin?
    	@users = User.all
    end
  end

end
