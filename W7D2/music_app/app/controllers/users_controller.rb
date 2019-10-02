class UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def show
    if logged_in?
      @user = User.find_by(id: params[:id])
      render :show
    else
      redirect_to new_session_url
    end
  end
  
  def new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
        redirect_to users_url
    else
      render :new
    end
    
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
