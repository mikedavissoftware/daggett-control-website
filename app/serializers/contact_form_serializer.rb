class ContactFormSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :content
end
