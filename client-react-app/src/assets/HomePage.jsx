import React from 'react';
import Ranking from './Ranking'; // Import Ranking component
import Footer from './Footer'; // Import Footer component

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Where's Waldo Game!</h1>
      {/* <img src="path_to_background_image.jpg" alt="Background" className="background-image" /> */}
      <button>
        Let's Play
      </button>
      <Footer />
    </div>
  );
};

export default HomePage;
