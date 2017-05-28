Rails.application.routes.draw do
  get '*path', to: 'brains#index'
end
