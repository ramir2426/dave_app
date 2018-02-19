Rails.application.routes.draw do
  root 'plainpage#index'
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
  resources :users do
    collection do
      get "super_admin", to: "users#super_admin", as: :super_admin
      get "new_super_admin", to: "users#new_super_admin", as: :new_super_admin
      get "company_admin", to: "users#company_admin", as: :company_admin
      get "new_company_admin", to: "users#new_company_admin", as: :new_company_admin
      get "members", to: "users#members", as: :members
      get "new_member", to: "users#new_member", as: :new_member
      get "team/:id", to: "users#team", as: :team
    end
  end
  resources :transactions do
    collection do 
      get "liability", to: "transactions#liability", as: :liability
      get "adjustment", to: "transactions#adjustment", as: :adjustment
    end
  end

  resources :trans_logs

  
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
