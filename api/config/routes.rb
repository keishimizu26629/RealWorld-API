Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :articles, only: [:index, :show, :create, :update, :destroy]
      resources :users, only: [:index, :create]
      post 'login', to: 'sessions#login'
      get 'get_user', to: 'users#get_user'
    end
  end
end
