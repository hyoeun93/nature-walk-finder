class AddLongitudeToPaths < ActiveRecord::Migration[5.2]
  def change
    add_column :paths, :longitude, :string
  end
end
