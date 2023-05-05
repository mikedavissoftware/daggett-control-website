class User < ApplicationRecord
  has_secure_password
  has_one_attached :image

  # The following validations are enabled by the activestorage-validator gem
  validates :image, blob: { content_type: ['image/png', 'image/jpg', 'image/jpeg'], size_range: 0..(5.megabytes) }

  def image_as_thumbnail
    image.variant(resize_to_limit: [300, 300]).processed
  end
end
