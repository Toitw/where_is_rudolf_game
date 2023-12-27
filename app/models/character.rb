class Character < ApplicationRecord
    def self.find_by_position(x, y)
        Character.all.each do |character|
            if (character.x_coordinate - x).abs <= 10 && (character.y_coordinate - y).abs <= 10
                return character
            end
        end
        return nil
    end
end
