class User < ApplicationRecord
  has_secure_password
  has_one_attached :image

  # The following validations are enabled by the activestorage-validator gem
  validates :image, blob: { content_type: ['image/png', 'image/jpg', 'image/jpeg'], size_range: 0..(5.megabytes) }

  def image_as_thumbnail
    image.variant(resize: "324^x324^", gravity: "Northwest", crop: "324x324+#{x_offset}+#{-y_offset}")
  end
end
