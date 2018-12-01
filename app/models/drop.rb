class Drop < ApplicationRecord
  validates :drop_date, presence: true
  validates :image, presence: true
end
