class ArtworksController < ApplicationController
  def index
    user = User.find(params[:user_id])
    owned_arts = user.artworks
    shared_arts = user.shared_artworks
    arts = owned_arts + shared_arts
    render json: arts
  end

  private

  def artwork_params
    params.require(:artwork).permit(:title, :image_url, :artist_id)
  end
end
