class WidhlistController < ApplicationController
    def add_widhlist 
        @widhlist = Widhlist.create({movie_id: params[:movie_id] , user_id: decode_token(params[:token])})
        render json: @widhlist.as_json(only: [:movie_id])
    end

    def remove_widhlist 
        @widhlist = Widhlist.find_by(movie_id: params[:movie_id] , user_id: decode_token(params[:token])).destroy
        render json: @widhlist
    end 

end