class CreateWidhlists < ActiveRecord::Migration[6.0]
  def change
    create_table :widhlists do |t|
      t.integer :user_id 
      t.integer :movie_id
      t.timestamps
    end
  end
end