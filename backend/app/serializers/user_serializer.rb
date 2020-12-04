class UserSerializer < ActiveModel::Serializer
  attributes :first_name , :last_name, :email , :dob , :gender
  # has_many :movie_reviews
  has_many :widhlists , serializer: WidhlistSerializer
  has_many :favorites , serializer: FavoriteSerializer
end
