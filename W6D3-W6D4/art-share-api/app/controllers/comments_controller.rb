class CommentsController < ApplicationController
  def index
    if params.has_key?(:author_id)
      comments = Comment.where(author_id: params[:author_id])
    elsif params.has_key?(:art_id)
      comments = Comment.where(art_id: params[:art_id])
    else 
      comments = Comment.all
    end
    render json: comments
  end

  def create
   comment = Comment.new(comment_params)
   if comment.save
    render json: comment
   else
    render json: comment.errors.full_messages, status: 422
   end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render json: comment
  end

  private

  def comment_params
    params.require(:comment).permit(:author_id, :art_id, :body)
  end
end