class Api::BenchesController < ApplicationController
    def create
        @bench = Bench.new(bench_params)
        if @bench.save 
            render :show
        else
            render json: {errors: @bench.errors.full_messages}, status: 422;
        end 
    end 

    def index
        @benches = Bench.all 
        render :index
    end 

    def show 
        @bench = Bench.find(params[:id])
        if @bench 
            render :show
        else 
            render json: {errors: @bench.errors.full_messages}, status: 422;
        end 
    end 

    private
    def bench_params
        params.require(:bench).permit(:title, :description, :price, :seating, :lng, :lat)
    end 
end
