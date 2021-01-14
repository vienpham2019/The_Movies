Rails.application.routes.draw do
  #user 
  post "/login", to: "user#login"
  post "/register" , to: "user#register"
  post "/update_user_info" , to: "user#update_user_info"
  post "/update_user_password" , to: "user#update_user_password"

  # widhlist 
  post "/add_widhlist", to: "widhlist#add_widhlist"
  post "/remove_widhlist" , to: "widhlist#remove_widhlist"

  # favorite 
  post "/add_favorite", to: "favorite#add_favorite"
  post "/remove_favorite" , to: "favorite#remove_favorite"

  # movie 
  resources :movie
  
  # review 
  get "/get_reviews/:movie_id", to: "review#get_reviews"
  post "/add_review", to: "review#add_review"

end
