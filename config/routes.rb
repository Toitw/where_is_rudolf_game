Rails.application.routes.draw do
  root "homepage#index"
  get "/gameboard", to: "gameboard#index"
  get "/api/characters", to: "characters#index"

  resources :characters
  post "/characters/clicked_frame", to: "characters#clicked_frame"
end
