class Path < ApplicationRecord
    has_many :completions
    has_many :users, through: :completions
    has_many :quizzes, through: :completions

    def self.search(search)
        # byebug
        if search
            paths = Path.all
            paths = paths.where(difficulty: search["difficulty"])
            paths = paths.where(surface_type: search["surface_type"])
            paths = paths.where(topography: search["topography"])
            # byebug
            return paths.sample(10)
        else
            Path.all
             
        end 
    end 
end
