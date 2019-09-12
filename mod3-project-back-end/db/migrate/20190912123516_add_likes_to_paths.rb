class AddLikesToPaths < ActiveRecord::Migration[5.2]
  def change
    add_column :paths, :likes, :integer
  end
end
