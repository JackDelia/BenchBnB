Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :benches, only: [:create, :index]

  resources :users, only: [:show, :create]

  resource :session, only: [:create, :destroy]
end
