class UsersController < ApplicationController
  def index
    # render plain: "I'm in the index action!"
    # users = User.all
    # render json: users
    if params.has_key?(:id)
      user = User.find(user_params[:id])
      render json: user
    else 
      users = User.all
      render json: users
    end
  end

  def create
    user = User.new(user_params)

    # user.save!
    # render json: user
    if user.save #truthy
      render json: user
    else
      render json: user.errors.full_messages, status: 422 #unprocessable entity
    end

  end

  def destroy
    user = User.find(user_params[:id])
    user.destroy
    render json: user
  end

  def update
    user = User.find(params(:id))
    if user.update(user_params) #truthy
      render json: user
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  def show
    user = User.find(params[:id])
    render json: user
  end 

  private

  def user_params
    params.require(:user).permit(:username)
  end

end