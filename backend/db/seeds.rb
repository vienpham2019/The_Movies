
Movie.destroy_all 
User.destroy_all 
MovieReview.destroy_all
Widhlist.destroy_all
Favorite.destroy_all

path = File.join(File.dirname(__FILE__), "./db.json")
records = JSON.parse(File.read(path))["movies"].uniq{|movie| [movie["title"],movie["release_date"]]}

sort_movies = records.sort{|a,b| b["release_date"].split("-").join("").to_i <=> a["release_date"].split("-").join("").to_i}

user = User.create({first_name: "vien" , last_name: "pham" , password: "1234567" , email: "vienpham2019@gmail.com"})

for movie in sort_movies do 
    if(movie["poster_path"] != "https://image.tmdb.org/t/p/w500null")
        movie_obj = {
            popularity: movie["popularity"],
            vote_count: movie["vote_count"],
            adult: movie["adult"],
            poster_path: movie["poster_path"],
            title: movie["title"],
            backdrop_path: movie["backdrop_path"], 
            vote_average: movie["vote_average"],
            overview: movie["overview"],
            release_date: movie["release_date"],
            production_countries: movie["production_countries"],
            runtime: movie["Runtime"],
            genre: movie["Genre"],
            director: movie["Director"],
            writers: movie["Writer"],
            actors: movie["Actors"],
            plot: movie["Plot"],
            language: movie["Language"],
            country: movie["Country"],
            awards: movie["Awards"],
            videos: movie["videos"],
            production_companies: movie["production_companies"], 
            reviews_total_score: 0
        }
        movie_review = movie["movieReviews"] 
        avg_score = 0 
        movie = Movie.create(movie_obj)
        months = ["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",]
        if(movie_review && movie_review.length != 0)
            total = 0 
            movie_review.map do |review| 
                ran_num = rand(1..10)
                review['score'] = ran_num 
                review['date'] = "#{months[rand(0..11)]} #{rand(1..28)}, #{movie["release_date"].split("-")[0]}"
                review['user_id'] = user.id
                review['movie_id'] = movie.id
                MovieReview.create(review)
                total += ran_num
            end
            movie.update(reviews_total_score: total)
        end

        # if(rand(-30...5) > 0)
        #     Favorite.create({user_id: user.id ,movie_id: movie.id})
        #     Widhlist.create({user_id: user.id ,movie_id: movie.id})
        # end

    end
end
