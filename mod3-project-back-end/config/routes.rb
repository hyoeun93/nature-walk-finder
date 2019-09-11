Rails.application.routes.draw do
  resources :paths
  resources :completions
  resources :quizzes, :controller => "paths"
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
