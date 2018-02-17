module UsersHelper
	def find_remaining_partner_ship(user_id)
		parent = User.find_by_id(user_id)
		if parent.present? && parent.descendants.present?
			percent = 100 - (parent.descendants.sum(:percentage))
		else
			percent= 100
		end
		percent
	end
end
