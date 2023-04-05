class TestimonialSerializer < ActiveModel::Serializer
  attributes :id, :name, :content, :website
  has_one :product_line
end
