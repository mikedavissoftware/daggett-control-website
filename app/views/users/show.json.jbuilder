# json.partial! "users/user", user: @user

json.user do
  json.id @user.id
  json.username @user.username
  json.password_digest @user.password_digest
  json.name @user.name
  json.role @user.role
  json.bio @user.bio
  json.website @user.website
  json.x_offset @user.x_offset
  json.y_offset @user.y_offset
  if @user.image.attached?
    json.image (url_for(@user.image))
    json.image_as_thumbnail (url_for(@user.image_as_thumbnail))
  end
end
