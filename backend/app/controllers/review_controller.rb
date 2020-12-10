class ReviewController < ApplicationController
    def get_reviews
        @movie = Movie.find(params[:movie_id])
        @reviews = @movie.movie_reviews
        render json: {movie: @movie, movie_reviews: @reviews.as_json(only: [:author , :content, :date, :score]), movie_token: encode_movie_token({movie_id: @movie.id})}
    end 

    def add_review 
        @movie_review = MovieReview.new()
        @movie_review.date = params[:date]
        @movie_review.score = params[:score]
        @movie_review.author = params[:author]
        @movie_review.content = params[:content]

        @movie = Movie.find(decode_movie_token(params[:movie_token]))
        if @movie
            @movie_review.movie_id = @movie.id
            @movie_review.save 
            @movie.update(reviews_total_score: @movie.reviews_total_score + @movie_review.score)
            render json: {movie: @movie , movie_reviews: @movie.movie_reviews.as_json(only: [:author , :content, :date, :score])}
        else 
            render json: {error: "server error"}
        end
    end 

    
end 