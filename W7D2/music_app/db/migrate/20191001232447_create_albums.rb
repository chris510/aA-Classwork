class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.integer :band_id, null: false
      t.string :title, null: false
      t.integer :year, null: false
      t.integer :record_id, null: false
      t.boolean :type, default: true

      t.timestamps
    end
    add_index :albums, :band_id
    add_index :albums, :record_id
  end
end
