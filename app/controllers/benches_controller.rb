class BenchesController < ApplicationController
  def index
    @benches = Bench.all
    @benches = @benches.select do |bench|
      inbounds(bench, params[:bounds])
    end
  end

  def create
    puts params
    @bench = Bench.new(params.require(:bench).permit(:description, :lat, :lng))

    @bench.save!
  end

  private
  def inbounds(bench, bounds)
    ne = bounds[:ne]
    sw = bounds[:sw]

    bench.lat.between?(sw[:lat].to_f, ne[:lat].to_f) &&
      bench.lng.between?(sw[:lng].to_f, ne[:lng].to_f)
  end
end
