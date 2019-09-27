class RemoveColumnsFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :name
    remove_column :users, :email
  end
end
