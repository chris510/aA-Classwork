class RemoveBodyFromComments < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :body 
  end
end
