class TestimonialSerializer < ActiveModel::Serializer
  attributes :id, :name, :content, :website, :x_offset, :y_offset
  has_one :product_line
end
