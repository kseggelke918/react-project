Rails.application.routes.draw do
  post "/api/vi/login", to: "api/vi/sessions#create"
  get "/api/v1/get_current_user", to: "api/vi/sessions#get_current_user"

  namespace :api do 
    namespace :v1 do 
      resources :users do 
        resources :accounts do 
          resources :transactions
        end 
      end 
    end 
  end 

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html



end

