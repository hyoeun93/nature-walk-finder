class AddLatitudeToPaths < ActiveRecord::Migration[5.2]
  def change
    add_column :paths, :latitude, :string
  end
end
