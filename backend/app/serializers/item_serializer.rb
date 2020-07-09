class ItemSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :user
  has_many :bids
  
  attributes :image, :name, :starting_price, :user, :duration, :description, :is_available, :like_count, :created_at
end
