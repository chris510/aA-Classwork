class ApplicationController < ActionController::Base

  helper_method :current_user, :login_user!, :logged_in?
  attr_reader :current_user

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login_user!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token 
  end

  def logged_in?
    !!current_user
  end
end
