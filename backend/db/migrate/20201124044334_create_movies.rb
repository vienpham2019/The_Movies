class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.float :popularity
      t.float :vote_count
      t.string :poster_path
      t.boolean :adult
      t.string :backdrop_path
      t.string :title
      t.float :vote_average
      t.string :overview 
      t.string :release_date
      t.json :production_countries
      t.string :runtime 
      t.string :genre
      t.string :director 
      t.string :writers
      t.string :actors
      t.string :plot
      t.string :language 
      t.string :country
      t.string :awards
      t.json :videos
      t.float :reviews_total_score 
      t.json :production_companies

      t.timestamps
    end
  end
end
