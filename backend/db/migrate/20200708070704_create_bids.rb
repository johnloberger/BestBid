class CreateBids < ActiveRecord::Migration[6.0]
  def change
    create_table :bids do |t|
      t.boolean :is_winner
      t.float :amount
      t.integer :item_id
      t.integer :user_id
      t.datetime :created_at

    end
  end
end
