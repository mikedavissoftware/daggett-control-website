# json.array! @product_lines, partial: "product_lines/product_line", as: :product_line

json.array! @product_lines do |product_line|
  json.id product_line.id
  json.company product_line.company
  json.logo product_line.logo
  json.description product_line.description
  json.website product_line.website
  if product_line.image.attached?
    json.image (url_for(product_line.image))
    json.image_as_thumbnail (url_for(product_line.image_as_thumbnail))
  end
  json.testimonials product_line.testimonials
end