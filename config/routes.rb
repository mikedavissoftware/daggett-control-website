Rails.application.routes.draw do
  resources :product_lines
  resources :testimonials
  resources :users
  resources :contact_form, only: [:create]

  # root 'application#hello_world'
  root 'application#database_home'

  get '/hello', to: 'application#hello_world'

  # post '/signup', to: 'users#create'
  patch '/me', to: 'users#update'
  # delete '/me', to: 'users#destroy'

  get '/me', to: 'sessions#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

end
