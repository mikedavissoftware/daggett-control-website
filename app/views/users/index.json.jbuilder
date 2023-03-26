# json.array! @users, partial: "users/user", as: :user

json.array! @users do |user|
  json.id user.id
  json.name user.name
  json.created_at user.created_at
  json.image user.image_as_thumbnail
end
