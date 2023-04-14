class SessionsController < ApplicationController
  skip_before_action :authorize, only: %i[ new create ]

  def show
    render json: @current_user
  end

  def new
  end

  def create
    user = User.find_by(username: params[:username])
    if user.present? & user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_path, notice: "Logged in successfully"
      # render json: user
    else
      flash[:alert] = "Invalid email or password"
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: "Logged out"
  end

end
