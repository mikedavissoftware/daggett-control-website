class ProductLineSerializer < ActiveModel::Serializer
  attributes :id, :company, :logo, :description, :website
end
