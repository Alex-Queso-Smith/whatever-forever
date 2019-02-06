class Api::V1::DropsController < ApiController

  def index
    @drops = Drop.all
    @latest_drop = Drop.last if Drop.last
  end

end
