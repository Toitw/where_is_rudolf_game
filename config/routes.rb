Rails.application.routes.draw do
  root "homepage#index"
  get "/gameboard", to: "gameboard#index"
  get "/api/characters", to: "characters#index"
  get "/api/scores", to: "scores#index"

  resources :characters
  post "/characters/clicked_frame", to: "characters#clicked_frame"

  resources :users
  post '/api/scores', to: 'scores#create'
end
