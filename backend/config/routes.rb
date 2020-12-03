Rails.application.routes.draw do
  #user 
  post "/login", to: "user#login"
  post "/register" , to: "user#register"

  # movie 
  resources :movie, only: [:index]

  # review 
  get "/get_reviews/:movie_id", to: "review#get_reviews"
  post "/add_review", to: "review#add_review"

end
