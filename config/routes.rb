Rails.application.routes.draw do
  root 'components#index'
  namespace :api do
    resources :assessments, only: [:show]
  end
end