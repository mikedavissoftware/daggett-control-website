json.extract! product_line, :id, :company, :logo, :description, :website, :created_at, :updated_at
json.url product_line_url(product_line, format: :json)
