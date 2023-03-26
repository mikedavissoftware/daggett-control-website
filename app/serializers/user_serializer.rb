class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :role, :bio, :website, :image_url

  def image_url
    @user.image.url
  end
end
