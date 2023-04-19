Rails.application.config.middleware.insert_before 0, Rack::Cors do

  allow do
    origins 'https://daggett-control-frontend.onrender.com'
    resource '*', 
      headers: :any, 
      methods: [:get]
  end

  allow do
    origins 'http://localhost:5172'
    resource '/contact_forms', 
      headers: :any, 
      methods: [:post]
  end

  allow do
    origins 'http://localhost:4172'
    resource '/contact_forms', 
      headers: :any, 
      methods: [:post]
  end

  allow do
    origins 'https://daggett-control-frontend.onrender.com'
    resource '/contact_forms', 
      headers: :any, 
      methods: [:post]
  end

  allow do
    origins 'https://daggett-control-frontend.onrender.com'
    resource '/contact_forms', 
      headers: :any, 
      methods: [:post]
  end

end