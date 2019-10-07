class CreateToysTables < ActiveRecord::Migration[5.1]
  def change
    create_table :toys_tables do |t|
      t.string :name, null: false
      t.integer :toyable_id
      t.integer :toyable_type,
      t.timestamps
    end

    add_index :toys_tables, :name, unique: true
    add_index :toys_tables, :toyable_id
  end
end
