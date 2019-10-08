class ApplicationController < ActionController::Base

  helper_method :logged_in?, :current_user, :auth_token

  def auth_token
    html = '<input type="hidden" name="authenticity_token" value="form_authenticity_token">'
    html.html_safe
  end

  def logged_in?
    !!current_user 
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token
  end

  def logout
    current_user.try(:reset_session_token)
    session[:session_token] = nil
  end

  def require_login
    redirect_to new_session_url unless logged_in?
  end

end