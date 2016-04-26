require 'byebug'

class UsersController < ApplicationController

  def create
    @user = User.new(params.require(:user).permit(:username, :password))
    if @user.reset_session_token
      session[:session_token] = @user.session_token
      puts session[:session_token]
      render :create
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def show
    @user = current_user
    if @user
      render :show
    else
      render json: "failure", status: 400
    end
  end
end
