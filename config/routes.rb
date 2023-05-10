Rails.application.routes.draw do
  resources :product_lines
  resources :testimonials
  resources :users
  resources :contact_forms

  # root 'application#hello_world'
  root 'application#database_home'

  get '/hello', to: 'application#hello_world'

  # post '/signup', to: 'users#create'
  patch '/me', to: 'users#update'
  # delete '/me', to: 'users#destroy'

  get '/me', to: 'sessions#show'
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # post '/contact', to: 'contact_forms#create'

end
