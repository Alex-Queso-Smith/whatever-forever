Rails.application.routes.draw do
  root 'splashes#index'

  resources :splashes, only: [ :index ]

  namespace :api do
    namespace :v1 do
      resources :drops, only: [ :index ]
    end
  end
end
