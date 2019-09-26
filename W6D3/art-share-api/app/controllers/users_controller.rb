class UsersController < ApplicationController
  def index
    # render plain: "I'm in the index action!"
    users = User.all
    render json: users
  end

  # def create
  #   render json: params
  # end

  def create
    user = User.new(params.require(:user).permit(:name, :email))
    # replace the `user_attributes_here` with the actual attribute keys
    user.save!
    render json: user
    # user = User.new(params.require(:user).permit(:name, :email))
    # if user.save
    #   render json: user
    # else
    #   render json: user.errors.full_messages, status: 422
    # end
  end

  def show
    render json: params
  end 

  # def user_params
  #   params.require(:user).permit(:name, :email)
  # end

end

# class UsersController < ApplicationController

#   def index
#     users = User.all
#     render json: users
#   end

#   def create
#     user = User.new(user_params)
#     if user.save
#       render json: user
#     else
#       render json: user.errors.full_messages, status: 422
#     end
#   end

#   def destroy
#     user = User.find(user_params[:id])
#     user.destroy
#     render json: user
#   end
  
#   def update 
#     user = User.find(params[:id])
#     if user.update(user_params)
#       render json: user
#     else
#       render json: user.errors.full_messages, status: :unprocessable_entity
#     end
#   end

#   def show
#     render json: user_params
#   end 

#   private

#   def user_params
#     params.require(:user).permit(:username)
#   end
# end

