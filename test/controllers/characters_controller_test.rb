require "test_helper"

class CharactersControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
end
require "test_helper"

class CharactersControllerTest < ActionDispatch::IntegrationTest
  test "should return character details when clicked frame contains a character" do
    character = Character.create(name: "Rudolf", x_coordinate: 10, y_coordinate: 20)
    post clicked_frame_path, params: { x: 10, y: 20 }
    assert_response :success
    assert_equal({ "character_id" => character.id, "name" => character.name, "status" => "found" }, JSON.parse(response.body))
  end

  test "should return not_found status when clicked frame does not contain a character" do
    post clicked_frame_path, params: { x: 10, y: 20 }
    assert_response :success
    assert_equal({ "status" => "not_found" }, JSON.parse(response.body))
  end
end