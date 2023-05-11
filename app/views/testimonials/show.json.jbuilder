# json.partial! "testimonials/testimonial", testimonial: @testimonial

json.testimonial do
  json.id @testimonial.id
  json.name @testimonial.name
  json.content @testimonial.content
  json.website @testimonial.website
  json.product_line @testimonial.product_line
  if @testimonial.image.attached?
    json.image (url_for(@testimonial.image))
    json.image_as_thumbnail (url_for(@testimonial.image_as_thumbnail))
  end
end