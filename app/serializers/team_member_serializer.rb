class TeamMemberSerializer < ActiveModel::Serializer
  attributes :id, :name, :role, :bio, :website, :image
end
