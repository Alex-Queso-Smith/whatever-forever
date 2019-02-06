class CreateDrops < ActiveRecord::Migration[5.2]
  def change
    create_table :drops do |t|
      t.text :title
      t.datetime :drop_date
      t.float :price

      t.timestamps
    end
  end
end
