json.extract! testimonial, :id, :name, :content, :website, :product_line, :created_at, :updated_at
json.url testimonial_url(testimonial, format: :json)
