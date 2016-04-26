class SessionController < ApplicationController
  def create
    @user = User.find_user_by_credentials(params.require(:user).permit(:username, :password))
    if @user.reset_session_token
      render json: {a: "b"}
    else
      render json: {error: "exists"}, status 333
    end
  end

  def destroy
    @user.reset_session_token
    session[:session_token] = nil
    render json: nil
end
