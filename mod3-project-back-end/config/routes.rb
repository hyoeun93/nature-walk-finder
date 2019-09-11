Rails.application.routes.draw do
  resources :paths, only: [:show, :delete]
  resources :completions
  # resources :quizzes, :controller => "paths"
  resources :users

  post '/path', to: 'paths#index', as: 'path_index' 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
