Rails.application.routes.draw do
  get "/api/vi/login", to: "sessions#create"

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

