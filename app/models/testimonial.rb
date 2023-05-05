class Testimonial < ApplicationRecord
  belongs_to :product_line
  has_one_attached :picture

  # The following validations are enabled by the activestorage-validator gem
  validates :picture, blob: { content_type: ['image/png', 'image/jpg', 'image/jpeg'], size_range: 0..(5.megabytes) }

  def picture_as_thumbnail
    picture.variant(resize_to_limit: [300, 300]).processed
  end
end
