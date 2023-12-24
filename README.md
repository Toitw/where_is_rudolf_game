# Where is Waldo Game App

This is a responsive Where is Waldo game application. The game consists of finding certain characters in an image. When all characters are found, the game ends and a pop-up will ask you to leave your name so the score is registered.

## Technologies Used

* Ruby on Rails for the backend
* React for the frontend

## Features

* Click on the image to select a character you think you've found.
* A list of characters will pop up for you to select from.
* Score registration upon completion of the game.

## Setup

To get this application up and running, you will need to follow these steps:

1. Clone the repository to your local machine.
2. Install Ruby and Rails on your machine. You can find the instructions [here](https://www.ruby-lang.org/en/documentation/installation/).
3. Install Node.js and npm. Instructions can be found [here](https://nodejs.org/en/download/).
4. Run `bundle install` to install the necessary Ruby gems.
5. Run `npm install` to install the necessary npm packages.
6. Run `rails db:create` followed by `rails db:migrate` to set up the database.
7. Run `rails server` to start the Rails server.
8. In a new terminal window, navigate to the client directory and run `npm start` to start the React application.

## How to Play

1. Start the game by clicking on the image.
2. Select the character you think you've found from the pop-up list.
3. Repeat until all characters are found.
4. Enter your name in the pop-up to register your score.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Credits
Images from Gus Morais => https://www.behance.net/gusmorais

