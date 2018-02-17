module UsersHelper
	def find_remaining_partner_ship(user_id)
		parent = User.find_by_id(user_id)
		if parent.present? && parent.descendants.present?
			100 - (parent.descendants.sum(:percentage))
		else
			100
		end
	end
end
