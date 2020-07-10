class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :image
      t.string :name
      t.integer :user_id
      t.float :starting_price
      t.integer :duration
      t.string :description
      t.boolean :is_available
      t.integer :like_count
      t.datetime :created_at

 
    end
  end
end
