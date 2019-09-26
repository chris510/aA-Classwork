class CreateArtworkshares < ActiveRecord::Migration[5.2]
  def change
    create_table :artworkshares do |t|
      t.integer :artwork_id, null: false
      t.integer :viewer_id, null: false
      t.timestamps
    end
    add_index :artworkshares, :artwork_id, unique: true
    add_index :artworkshares, :viewer_id, unique: true
  end
end