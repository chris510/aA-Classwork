class AddUniquenessToArtworksharesIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :artworkshares, [:artwork_id, :viewer_id]
  end
end
