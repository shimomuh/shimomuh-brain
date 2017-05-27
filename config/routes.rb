Rails.application.routes.draw do
  resources :brains, only: :index do
    resources :frontal_lobes, only: :index
    resources :temporal_lobes, only: :index
    resources :parietal_lobes, only: :index
    resources :occipital_lobes, only: :index
    resources :cerebellum, only: :index
    resources :brainstem, only: :index
  end
  root 'brains#index'
end
