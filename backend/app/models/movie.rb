class Movie < ApplicationRecord
    has_many :movie_reviews 
    has_many :widhlists 
    has_many :favorites
end
