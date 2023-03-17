class UsersController < ApplicationController
  skip_before_action :authorize, only: [:index, :show, :create]

  def show
    user = User.find(params[:id])
    render json: user, include: ['likes', 'comments']
  end

  def update
    @current_user.update!(user_params)
    render json: @current_user, status: :accepted
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :image, :fav_bowl, :diet)
  end
end
