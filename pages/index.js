// pages/index.js
import React from 'react';
import Posts from '../components/Posts';

const Home = () => {
  return (
    <div className="container">
      <h1>CRUD</h1>
      <Posts />
    </div>
  );
};

export default Home;
