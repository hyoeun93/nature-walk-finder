class Quiz < ApplicationRecord
    has_many :completions
    has_many  :users, through: :completions
    has_many :paths, through: :completions
end
