Rails.application.routes.draw do
  root 'splashes#index'

  resources :splashes
end
