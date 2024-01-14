class CharactersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:clicked_frame]

    def clicked_frame
        x_click = clicked_frame_params[:xPercentage].to_i 
        y_click = clicked_frame_params[:yPercentage].to_i 
    
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
        params.require(:clicked_frame).permit(:xPercentage, :yPercentage)
    end
end
