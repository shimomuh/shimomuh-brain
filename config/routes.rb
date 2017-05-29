Rails.application.routes.draw do
  root 'brains#index'
  get '*path', to: 'brains#index'
end
