Rails.application.routes.draw do
  #user 
  post "/login", to: "user#login"
  post "/register" , to: "user#register"
  post "/update_user_info" , to: "user#update_user_info"

  # widhlist 
  post "/add_widhlist", to: "widhlist#add_widhlist"
  post "/remove_widhlist" , to: "widhlist#remove_widhlist"

  # movie 
  resources :movie, only: [:index]

  # review 
  get "/get_reviews/:movie_id", to: "review#get_reviews"
  post "/add_review", to: "review#add_review"

end
