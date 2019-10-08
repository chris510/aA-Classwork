class RemoveColumnFromComments < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :comment_id
  end
end
