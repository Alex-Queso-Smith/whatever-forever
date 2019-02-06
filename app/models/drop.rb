class Drop < ApplicationRecord
  include Fae::BaseModelConcern
  has_fae_image :drop_image

  def fae_display_field
    title
  end

end
