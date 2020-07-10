class BidsController < ApplicationController

  def create
    bid = Bid.create(amount: params[:amount], user_id: params[:userId], item_id: params[:itemId], is_winner: false)
    render json: bid
  end

  def show
    bid = Bid.find(params[:id])
    options = {
      include: [:item, :user]
    }
    render json: BidSerializer.new(bid, options)
  end

end
