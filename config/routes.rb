Rails.application.routes.draw do
  resources :frontal_lobes, only: :index
  root 'frontal_lobes#index'
end
