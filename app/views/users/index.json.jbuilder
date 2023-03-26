# json.array! @users, partial: "users/user", as: :user

json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.password_digest user.password_digest
  json.name user.name
  json.role user.role
  json.bio user.bio
  json.website user.website
  if user.image.attached?
    json.image ("/api" + url_for(user.image))
    json.image_as_thumbnail ("/api" + url_for(user.image_as_thumbnail))
  end
end
