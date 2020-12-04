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
        render json: {
            user: @user.as_json(only: [:first_name, :last_name, :email, :dob , :gender] , include: {widhlists: {only: [:movie_id]} , favorites: {only: [:movie_id]}}) , 
            token: encode_token({user_id: @user.id}),
        }
        else 
            render json: {error: "Invalid Username or Password"}
        end
    end

    private 
      def user_params 
        params.permit(:first_name , :last_name , :email , :password)
      end
end