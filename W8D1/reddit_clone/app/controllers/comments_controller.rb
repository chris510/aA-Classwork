class CommentsController < ApplicationController

  before_action :require_login

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    # @comment.post_id = params[:post_id]
    # @comment.parent_comment_id = params[:parent_comment_id]

    @prev_comment = Comment.find_by(parent_comment_id: params[:parent_comment_id])
    @comment.post_id = @prev_comment.post_id
    @comment.parent_comment_id = @prev_comment.id
    


    # if @comment.post_id.nil?
    #   @comment.post_id = params[:post_id]
    # else
    #   @comment.comment_id = params[:comment_id]
    #   @prev_comment = Comment.find_by(id: params[:id])
    #   @comment.post_id = @prev_comment.post_id
    # end

    if @comment.save
      if @comment.parent_comment_id.nil?
        redirect_to post_url(@comment.post_id)
      else
        redirect_to comment_url(@comment)
      end
    else 
      flash[:errors] = @comment.errors.full_messages
      redirect_to post_url(@comment.post_id)
    end
  end

  def show
    @comment = Comment.find_by(id: params[:id])
  end

  def comment_params
    params.require(:comment).permit(:content, :post_id, :parent_comment_id)
  end
end
