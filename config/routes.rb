Rails.application.routes.draw do
  resources :users
  resources :product_lines
  resources :testimonials
  resources :team_members
  resources :company_infos
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
