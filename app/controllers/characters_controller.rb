class CharactersController < ApplicationController
    def clicked_frame
        x_click = params[:x].to_i # X-coordinate of the user's click
        y_click = params[:y].to_i # Y-coordinate of the user's click
    
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
end
