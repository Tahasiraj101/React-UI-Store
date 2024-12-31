import React from 'react';
import './Home.css';  // Import CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Our Store</h1>
        <p>Your one-stop shop for amazing products!</p>
        <button className="cta-button">Shop Now</button>
      </div>
      <div className="about-section">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate at ex animi molestias, culpa qui quia eveniet praesentium non nesciunt. Ex consectetur unde ut? Reprehenderit numquam odio harum perspiciatis non.</p>
      </div>
    </div>
  );
}

export default Home;
