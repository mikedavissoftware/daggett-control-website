class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :role, :bio, :website
end
