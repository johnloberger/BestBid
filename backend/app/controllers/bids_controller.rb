class BidsController < ApplicationController

  def show
    bid = Bid.find(params[:id])
    options = {
      include: [:item, :user]
    }
    render json: BidSerializer.new(bid, options)
  end

end
