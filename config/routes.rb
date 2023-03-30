Rails.application.routes.draw do
  # root 'users#index'

  resources :users
  resources :product_lines
  resources :testimonials
  resources :contact_forms

  get '/hello', to: 'application#hello_world'

  # post '/signup', to: 'users#create'
  patch '/me', to: 'users#update'
  # delete '/me', to: 'users#destroy'

  get '/me', to: 'sessions#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

end
