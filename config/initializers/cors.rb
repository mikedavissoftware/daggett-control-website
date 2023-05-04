Rails.application.config.middleware.insert_before 0, Rack::Cors do

  allow do
    origins 'https://daggett-control-frontend-2.onrender.com'
    resource '*', 
      headers: :any, 
      methods: [:get]
    resource '/contact_forms',
      headers: :any, 
      methods: [:post]
  end

  allow do
    origins 'http://localhost:5173'
    resource '*', 
      headers: :any, 
      methods: [:get]
    resource '/contact_forms',
      headers: :any, 
      methods: [:post]
  end

  allow do
    origins 'http://localhost:4173'
    resource '*', 
      headers: :any, 
      methods: [:get]
    resource '/contact_forms',
      headers: :any, 
      methods: [:post]
  end

end