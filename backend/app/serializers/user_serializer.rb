class UserSerializer
  include FastJsonapi::ObjectSerializer
  has_many :items
  has_many :bids
  
  attributes :full_name, :email, :date_of_birth, :items, :bids
end
