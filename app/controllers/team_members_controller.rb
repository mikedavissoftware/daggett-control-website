class TeamMembersController < ApplicationController

  def index
    team_members = TeamMember.all
    render json: team_members
  end

  def show
    team_member = TeamMember.find[params[:id]]
    render json: team_member
  end
end
