class BidSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :user
  belongs_to :item
  
  attributes :amount, :user, :item
end
