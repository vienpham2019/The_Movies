class User < ApplicationRecord
    has_secure_password
    has_many :widhlists 
    has_many :favorites

    validates :email, uniqueness: true 
end
