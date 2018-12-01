class Api::V1::DropsController < ApiController

  def index
    drops = Drop.all
    render json: {  drops: drops }
  end

end
