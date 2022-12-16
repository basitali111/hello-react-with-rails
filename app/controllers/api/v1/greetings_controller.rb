module Api
  module V1
    class GreetingsController < ApplicationController
      def index
        render json: Greeting.find(rand(1..5))
      end
    end
  end
end
