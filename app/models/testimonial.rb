class Testimonial < ApplicationRecord
  belongs_to :product_line
  has_one_attached :image

  # The following validations are enabled by the activestorage-validator gem
  validates :image, blob: { content_type: ['image/png', 'image/jpg', 'image/jpeg'], size_range: 0..(5.megabytes) }

  def image_as_thumbnail
    image.variant(resize: "300^x300^", gravity: "Northwest", crop: "300x300+#{x_offset}+#{-y_offset}")
  end
end
