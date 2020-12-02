class ReviewController < ApplicationController
    def get_reviews
        @reviews = Movie.find(params[:movie_id]).movie_reviews
        render json: {reviews: @reviews}
    end 

    def add_review 
        @movie = Movie.find(params[:movie_id])
        @movie_review = MovieReview.create(movie_review_params)
        @movie.reviews_total_score += @movie_review.score
        @movie.save
        render json: {movie: @movie , movie_reviews: @movie.movie_reviews}
    end 

    private 
        def movie_review_params 
            params.permit(:user_id , :movie_id, :date, :score, :author, :content)
        end 
end 