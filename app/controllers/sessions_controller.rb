class SessionsController < ApplicationController
  skip_before_action :authorize, only: %i[ new create ]

  def show
    render json: @current_user
  end

  def new
  end

  def create
    user = User.find_by(username: params[:username])
    if user != nil && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to users_path, notice: "Logged in successfully"
    else
      redirect_to login_path, alert: "Invalid username or password"
    end
  end

  def destroy
    session.destroy
    redirect_to login_path, alert: "Logged out"
  end

end
