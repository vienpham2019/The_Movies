class CreateMovieReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :movie_reviews do |t|
      t.integer :movie_id
      t.string :date
      t.integer :score
      t.string :author
      t.string :content
      t.timestamps
    end
  end
end
