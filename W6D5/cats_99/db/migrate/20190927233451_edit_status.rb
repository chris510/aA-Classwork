class EditStatus < ActiveRecord::Migration[5.2]
  def change
    remove_column :cat_rental_requests, :status 

    add_column :cat_rental_requests, :status, :string, :default => "PENDING" 
  end
end
