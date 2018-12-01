Rails.application.routes.draw do

  namespace :admin do
  end
  # mount Fae below your admin namespec
  mount Fae::Engine => '/admin'

  root 'splashes#index'

  resources :splashes, only: [ :index ]

  namespace :api do
    namespace :v1 do
      resources :drops, only: [ :index ]
    end
  end
end
