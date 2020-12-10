class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    def encode_token(payload)
        JWT.encode(payload, "My_Src_for_user")
    end 

    def decode_token(payload)
        JWT.decode(payload, "My_Src_for_user")[0]["user_id"]
    end 

    def encode_movie_token(payload)
        JWT.encode(payload, "My_Src_for_movie")
    end 

    def decode_movie_token(payload)
        JWT.decode(payload, "My_Src_for_movie")[0]["movie_id"]
    end 
end
