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

ActiveRecord::Schema.define(version: 2019_07_15_175820) do

  create_table "calendars", force: :cascade do |t|
    t.integer "patient_id"
    t.string "name"
    t.string "description"
  end

  create_table "contact_categories", force: :cascade do |t|
    t.string "name"
    t.string "description"
  end

  create_table "contacts", force: :cascade do |t|
    t.integer "contact_category_id"
    t.string "name"
    t.string "description"
    t.string "notes"
  end

  create_table "days", force: :cascade do |t|
    t.integer "calendar_id"
    t.date "date"
    t.string "notes"
  end

  create_table "patients", force: :cascade do |t|
    t.integer "user_id"
  end

  create_table "procedures", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "patient_id"
    t.integer "provider_id"
  end

  create_table "providers", force: :cascade do |t|
    t.integer "user_id"
    t.string "provider_type"
  end

  create_table "symptom_days", force: :cascade do |t|
    t.integer "days_id"
    t.integer "symptom_id"
  end

  create_table "symptoms", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "notes"
    t.integer "patient_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
  end

  create_table "visits", force: :cascade do |t|
  end

end
