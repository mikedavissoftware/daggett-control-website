# json.array! @testimonials, partial: "testimonials/testimonial", as: :testimonial

json.array! @testimonials do |testimonial|
  json.id testimonial.id
  json.name testimonial.name
  json.content testimonial.content
  json.website testimonial.website
  json.x_offset testimonial.x_offset
  json.y_offset testimonial.y_offset
  json.product_line testimonial.product_line
  if testimonial.image.attached?
    json.image (url_for(testimonial.image))
    json.image_as_thumbnail (url_for(testimonial.image_as_thumbnail))
  end
end