class User < ApplicationRecord
    has_many :completions
    has_many :quizzes, through: :completions
    has_many :paths, through: :completions
end
