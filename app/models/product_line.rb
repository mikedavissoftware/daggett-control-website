class ProductLine < ApplicationRecord
  has_many :testimonials, dependent: :destroy
  has_one_attached :image

  # The following validations are enabled by the activestorage-validator gem
  validates :image, blob: { content_type: ['image/png', 'image/jpg', 'image/jpeg'], size_range: 0..(5.megabytes) }

  def image_as_thumbnail
    image.variant(resize_to_limit: [324, 324]).processed
  end
end
