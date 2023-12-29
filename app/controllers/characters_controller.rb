class CharactersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:clicked_frame]

    def clicked_frame
        x_click = params[:x].to_i 
        y_click = params[:y].to_i 
    
        character = Character.find_by_position(x_click, y_click)
    
        if character
          render json: { character_id: character.id, name: character.name, status: "found" }
        else
          render json: { status: "not_found" }
        end
    end

    def index
        characters = Character.all
        render json: characters
    end

    def clicked_frame_params
        params.require(:clicked_frame).permit(:x, :y)
    end
end
