Rails.application.routes.draw do
  root 'components#index'
  namespace :api do
    resources :templates, only: [:show]
    resources :assessments, only: [:create]
  end
end