Rails.application.routes.draw do
<<<<<<< HEAD
  resources :paths, only: [:show, :delete]
=======
  resources :paths, only: [:show, :destroy]
>>>>>>> c903f3755d82827b9e5d6a2b54cef44d2a190092
  resources :completions
  # resources :quizzes, :controller => "paths"
  resources :users

  post '/path', to: 'paths#index', as: 'path_index' 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
