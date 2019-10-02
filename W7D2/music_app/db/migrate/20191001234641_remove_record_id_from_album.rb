class RemoveRecordIdFromAlbum < ActiveRecord::Migration[5.2]
  def change
    remove_column :albums, :record_id
  end
end
