class ItemsController < ApplicationController

  def create
    item = Item.create(name: params[:name], image: params[:image], starting_price: params[:starting_price], description: params[:description], duration: params[:duration])
    render json: item
  end

  def index 
    items = Item.all 
    options = {
      include: [:user, :bids]
    }
    render json: ItemSerializer.new(items, options)
  end

  def show
    item = Item.find(params[:id])
    options = {
      include: [:user, :bids]
    }
    render json: ItemSerializer.new(item, options)
  end

end
