Rails.application.routes.draw do
  resources :users, only: [:create]
  post 'users/login', to: 'sessions#create'
end
