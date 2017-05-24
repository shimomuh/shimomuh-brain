Rails.application.routes.draw do
  resources :beliefs, only: :index
  root 'beliefs#index'
end
