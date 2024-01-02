class ScoresController < ApplicationController
    def index
        scores = User.all.order(time: :asc).limit(10)
        render json: scores
    end
    
    def create
        score = User.new(score_params)
        if score.save
            render json: score, status: :created
        else
            render json: score.errors, status: :unprocessable_entity
        end
    end

    private

    def score_params
        params.require(:score).permit(:name, :time)
    end
end
