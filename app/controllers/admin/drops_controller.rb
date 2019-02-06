module Admin
  class DropsController < Fae::BaseController

    private

    def build_assets
      @item.build_drop_image if @item.drop_image.blank?
    end

  end
end
