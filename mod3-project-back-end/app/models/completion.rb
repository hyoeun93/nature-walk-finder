class Completion < ApplicationRecord
    belongs_to :users
    belongs_to :paths
    belongs_to :quizzes
end
