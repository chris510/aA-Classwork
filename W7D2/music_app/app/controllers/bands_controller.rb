class BandsController < ApplicationController
  def index
    @bands = Band.all
    render :index
  end

  def show
    @band = Band.find_by(id: params[:id])

    if @band
      render :show
    else
      redirect_to bands_url
    end
  end

  def create
    @band = Band.new(band_params)
    if @band.save
      redirect_to bands_url
    else
      render :new
    end
  end

  def destroy

  end

  private

  def band_params
    params.require(:band).permit(:name)
  end
end
