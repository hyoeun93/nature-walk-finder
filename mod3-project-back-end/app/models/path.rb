class Path < ApplicationRecord
    has_many :completions
    has_many :users, through: :completions
    has_many :quizzes, through: :completions
end
