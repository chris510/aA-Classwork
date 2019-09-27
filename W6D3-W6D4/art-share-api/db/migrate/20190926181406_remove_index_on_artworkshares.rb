class RemoveIndexOnArtworkshares < ActiveRecord::Migration[5.2]
  def change
    remove_index :artworkshares, :artwork_id
    remove_index :artworkshares, :viewer_id
  end
end
