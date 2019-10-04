class UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end

  def show
    @users = User.find_by(id: params[:id])
    if @users
      render :show
    else
      flash[:errors] = "User not here, bro!"
      redirect_to users_url
    end
  end 


end
