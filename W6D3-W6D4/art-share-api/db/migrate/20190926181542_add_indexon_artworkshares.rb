class AddIndexonArtworkshares < ActiveRecord::Migration[5.2]
  def change
    add_index :artworkshares, :artwork_id
    add_index :artworkshares, :viewer_id
  end
end
