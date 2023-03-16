class TestimonialSerializer < ActiveModel::Serializer
  attributes :id, :name, :content, :website, :image
  has_one :product_line
end
