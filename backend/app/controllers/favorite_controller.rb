class FavoriteController < ApplicationController
    def add_favorite 
        @favorite = Favorite.create({movie_id: params[:movie_id] , user_id: decode_token(params[:token])})
        
        render json: @favorite.as_json(only: [:movie_id])
    end

    def remove_favorite 
        @favorite = Favorite.find_by(movie_id: params[:movie_id] , user_id: decode_token(params[:token])).destroy
        render json: @favorite
    end 

end