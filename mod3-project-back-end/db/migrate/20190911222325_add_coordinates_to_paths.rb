class AddCoordinatesToPaths < ActiveRecord::Migration[5.2]
  def change
    add_column :paths, :longitude, :decimal, precision: 10, scale: 6, null: false, default: 0
    add_column :paths, :latitude, :decimal, precision: 10, scale: 6, null: false, default: 0
  end
end
