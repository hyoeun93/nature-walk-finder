class AddCoordinatesToPaths < ActiveRecord::Migration[5.2]
  def change
    add_column :paths, :longitude, :integer
    add_column :paths, :latitude, :integer
  end
end

 