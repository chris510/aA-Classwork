class SessionsController < ApplicationController
  before_action :logged_in? 

  def new
    render :new 
  end

  def create
    user_name = params[:user][:user_name]
    password = params[:user][:password]

    user = User.find_by_credentials(user_name, password)
    if user
      login_user!(user)
      redirect_to cats_url 
    else 
      render json: "Can't login"
    end
  end

  def destroy
    if current_user
      @current_user.reset_session_token! 
      session[:session_token] = nil
      redirect_to new_session_url
    end
  end
end
