# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20180214173422) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "transaction_logs", force: :cascade do |t|
    t.float    "amount",         default: 0.0
    t.float    "pre_balance",    default: 0.0
    t.float    "new_balance",    default: 0.0
    t.integer  "transaction_id"
    t.integer  "user_id"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
  end

  add_index "transaction_logs", ["transaction_id"], name: "index_transaction_logs_on_transaction_id", using: :btree
  add_index "transaction_logs", ["user_id"], name: "index_transaction_logs_on_user_id", using: :btree

  create_table "transactions", force: :cascade do |t|
    t.float    "amount",     null: false
    t.integer  "trans_type", null: false
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "transactions", ["user_id"], name: "index_transactions_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "",  null: false
    t.string   "encrypted_password",     default: "",  null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,   null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
    t.string   "first_name"
    t.string   "last_name"
    t.integer  "role_id",                default: 0
    t.float    "percentage",             default: 0.0
    t.string   "ancestry"
    t.float    "amount",                 default: 0.0
    t.float    "total_profit",           default: 0.0
    t.float    "total_loss",             default: 0.0
  end

  add_index "users", ["ancestry"], name: "index_users_on_ancestry", using: :btree
  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  add_foreign_key "transaction_logs", "transactions"
  add_foreign_key "transaction_logs", "users"
  add_foreign_key "transactions", "users"
end
