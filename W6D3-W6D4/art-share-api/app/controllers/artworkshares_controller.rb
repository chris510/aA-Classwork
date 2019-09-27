class ArtworksharesController < ApplicationController

  def create
    shared = Artworkshare.new(artwork_share_params)

    if shared.save
      render json: shared
    else  
      render json: shared.errors.full_messages, status: 422
    end
  end

  def delete
    shared = User.find(artwork_share_params[:id])
    shared.destroy
    render json: shared
  end

  private

  def artwork_share_params
    params.require(:artworkshares).permit(:artwork_id, :viewer_id)
  end
end
