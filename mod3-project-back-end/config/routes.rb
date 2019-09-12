Rails.application.routes.draw do
  resources :paths, only: [:show, :destroy, :update]
  resources :completions
  # resources :quizzes, :controller => "paths"
  resources :users

  post '/path', to: 'paths#index', as: 'path_index' 

  get '/paths/:id/likes', to: "path#add_like", as: "add_like"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
