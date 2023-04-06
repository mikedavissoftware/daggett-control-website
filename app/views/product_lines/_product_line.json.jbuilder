json.extract! product_line, :id, :company, :logo, :description, :website, :created_at, :updated_at, :testimonials
json.url product_line_url(product_line, format: :json)
