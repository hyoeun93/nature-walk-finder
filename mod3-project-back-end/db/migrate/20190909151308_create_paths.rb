class CreatePaths < ActiveRecord::Migration[5.2]
  def change
    create_table :paths do |t|
      t.string :name
      t.integer :difficulty
      t.string :surface_type
      t.boolean :trail_markers
      t.string :topography
      t.string :img_url 
      t.timestamps
    end
  end
end
