# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_08_070704) do

  create_table "bids", force: :cascade do |t|
    t.boolean "is_winner"
    t.float "amount"
    t.integer "item_id"
    t.integer "user_id"
    t.datetime "created_at"
  end

  create_table "items", force: :cascade do |t|
    t.string "image"
    t.string "name"
    t.integer "user_id"
    t.float "starting_price"
    t.integer "duration"
    t.string "description"
    t.boolean "is_available"
    t.integer "like_count"
    t.datetime "created_at"
  end

  create_table "users", force: :cascade do |t|
    t.string "full_name"
    t.string "email"
    t.string "date_of_birth"
    t.string "location"
    t.string "profile_picture"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
