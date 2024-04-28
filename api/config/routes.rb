Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :articles, only: [:index, :show, :create, :update, :destroy]
      resources :users, only: [:index, :create]  # ユーザー登録のルートを追加
      post 'login', to: 'sessions#create'
    end
  end
end
