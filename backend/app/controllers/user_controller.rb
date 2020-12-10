class UserController < ApplicationController
    def register
        @user = User.new(user_params)
        if @user.valid? 
            @user.save
            render json: @user 
        else
            render json: {error: @user.errors['email'][0]}
        end
    end

    def login
        @user = User.find_by(email: params[:email])
        if @user && @user.authenticate(params[:password])
            @widhlists = @user.widhlists
            @favorites = @user.favorites
        render json: {
            user: @user.as_json(only: [:first_name, :last_name, :email, :dob , :gender]),
            widhlists: @widhlists.as_json(only: [:movie_id], include: :movie),
            favorites: @favorites.as_json(only: [:movie_id] , include: :movie),
            token: encode_token({user_id: @user.id}),
        }
        else 
            render json: {error: "Invalid Username or Password"}
        end
    end

    def update_user_info
        @user = User.find(decode_token(params[:token]))
        @user_by_email = User.find_by(email: params[:email])
        if @user_by_email && @user.email != params[:email]
            render json: {error: "Email has already been taken"}
        else 
            @user.update(user_info_params)
            render json: @user.as_json(only: [:first_name , :last_name , :email, :dob , :gender]) 
        end
    end 

    def update_user_password
        @user = User.find(decode_token(params[:token]))
        @user.update(password: params[:password])
        render json: {message: "Update success"}
    end 

    private 
      def user_params 
        params.permit(:first_name , :last_name , :email , :password)
      end

      def user_info_params
        params.permit(:first_name , :last_name , :email , :dob, :gender)
      end 
end