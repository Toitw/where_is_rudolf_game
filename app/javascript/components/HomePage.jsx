import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Chars from './Chars';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* <Link to="/api/scores" role="button">
        Ranking
      </Link> */}
      <h1><span className="black-text">Welcome to </span><span className="red-text">Where's Santa's </span><span className="black-text">reindeer!</span></h1>
      <h2>Find Santa's reindeers before the rest and save the Xmas!</h2>
      <Chars />
      <Link to="/gameboard" role="button" className="play-button">
        Let's play!
      </Link>
      <Footer />
    </div>
  );
};

export default HomePage;
