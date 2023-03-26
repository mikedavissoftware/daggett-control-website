# json.partial! "users/user", user: @user

json.user do
  json.id @user.id
  json.name @user.name
  json.role @user.role
  json.image @user.image_as_thumbnail
end
