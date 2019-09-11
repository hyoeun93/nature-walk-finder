Rails.application.routes.draw do
<<<<<<< HEAD
  resources :paths, only: [:show, :destroy, :update]
  resources :completions
=======
  resources :paths, only: [:show, :destroy]
  resources :completions, only: [:index]
>>>>>>> abc019c7f8f4e4957ad426c53ef486efef24869f
  # resources :quizzes, :controller => "paths"
  resources :users, only: [:index]

  post '/path', to: 'paths#index', as: 'path_index' 

  get '/path/:id/likes', to: "path#add_like", as: "add_like"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
