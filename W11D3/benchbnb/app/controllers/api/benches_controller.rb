class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
  end

  def show
    @bench = selected_bench
  end

  def create
    @bench = Bench.create(bench_params)

    if @bench.save
      render :show
    else 
      render json: @bench.errors.full_messages, status: 401
    end
  end

  private 
  def selected_bench
    Bench.find(params[:id])
  end

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end

end
