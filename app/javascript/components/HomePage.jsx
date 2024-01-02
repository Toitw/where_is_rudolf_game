import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <Link to="/api/scores" role="button">
        Ranking
      </Link>
      <h1>Welcome to Where's Santa's reindeer!</h1>
      {/* <img src="path_to_background_image.jpg" alt="Background" className="background-image" /> */}
      <Link to="/gameboard" role="button">
        Let's play!
      </Link>
      <Footer />
    </div>
  );
};

export default HomePage;
