class AddDrops < ActiveRecord::Migration[5.2]
  def change
    create_table :drops do |t|
      t.date :drop_date, null: false
      t.string :image, null: false
    end
  end
end
