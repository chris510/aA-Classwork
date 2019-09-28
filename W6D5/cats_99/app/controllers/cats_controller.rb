class CatsController < ApplicationController
  def index
    @cats = Cat.all
    render :index
  end

  def show
    @cat = Cat.find_by(id: params[:id])
    render :show
  end

  def new
    @cat = Cat.new
    # (birth_date: "", color: "",name: "", sex: "", description:"")
    render :new
    # if @cat.save
    #   render :form
    # else
    #   render json: @cat.errors.full_messages, status: 422
    # end
  end

  def create
    @cat = Cat.new(cats_params)

    if @cat.save
      redirect_to cats_url
    else
      render json: @cat.errors.full_messages, status: 422
    end
  end
  
  def edit
    @cat = Cat.find_by(id: params[:id])
    render :edit
  end

  def update
  end

  private

  def cats_params
    params.require(:cat).permit(:birth_date, :color, :name, :sex, :description)
  end
end
