class SessionsController < ApplicationController
  def new

  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      redirect_to user_url(@user)
    else
      flash[:errors] = "Cant login"
      render :new
    end
  end

  def destroy
    logout
    redirect_to posts_url
  end
end
