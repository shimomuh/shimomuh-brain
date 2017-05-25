Rails.application.routes.draw do
  resources :brains, only: :index
  root 'brains#index'
end
