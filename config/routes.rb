Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  #post route for clicked_frame
  root "homepage#index"
  get "/gameboard", to: "gameboard#index"
  post "/clicked_frame", to: "characters#clicked_frame"
  # Defines the root path route ("/")
  # root "articles#index"
end
