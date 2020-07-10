class UsersController < ApplicationController



  def create
    user = User.find_or_create_by(email: params[:email])
    render json: user
  end

  def index 
    users = User.all 
    options = {
      include: [:items, :bids]
    }
    render json: UserSerializer.new(users, options)
  end

  def show
    user = User.find(params[:id])
    options = {
      include: [:items, :bids]
    }
    render json: UserSerializer.new(user, options)
  end



end
