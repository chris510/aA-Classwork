class PostsController < ApplicationController

  before_action :require_login

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
    # @post.sub_id = params[:sub_id]
    # @post.author_id = current_user.id
  end
  
  def create
    @post = Post.new(post_params)
    @post.author_id =  
    @post.sub_id = params[:sub_id]
    if @post.save
      redirect_to post_url(@post)
    else 
      flash[:errors] = @post.errors.full_messages
      render :new
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to sub_url(@post.sub_id)
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if current_user.id == @post.author_id && @post.update(post_params)
      redirect_to post_url(@post)
    else
      flash[:errors] = @post.errors.full_messages
      render :edit
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :url, :content)
  end
end
