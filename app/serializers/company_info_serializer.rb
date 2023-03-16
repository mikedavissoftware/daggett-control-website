class CompanyInfoSerializer < ActiveModel::Serializer
  attributes :id, :name, :byline, :bio
end
