# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

<<<<<<< HEAD
ActiveRecord::Schema.define(version: 2019_09_11_222325) do
=======
ActiveRecord::Schema.define(version: 2019_09_12_123516) do
>>>>>>> 674e431788bd4cb489cea0b98d36b8c49959b158

  create_table "completions", force: :cascade do |t|
    t.integer "user_id"
    t.integer "path_id"
    t.integer "quiz_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "paths", force: :cascade do |t|
    t.string "name"
    t.integer "difficulty"
    t.string "surface_type"
    t.boolean "trail_markers"
    t.string "topography"
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
<<<<<<< HEAD
    t.decimal "longitude", precision: 10, scale: 6, default: "0.0", null: false
    t.decimal "latitude", precision: 10, scale: 6, default: "0.0", null: false
=======
    t.integer "likes"
>>>>>>> 674e431788bd4cb489cea0b98d36b8c49959b158
  end

  create_table "quizzes", force: :cascade do |t|
    t.string "question"
    t.string "answer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
