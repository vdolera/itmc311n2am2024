// src/components/Home.jsx
import React from 'react';

function Home({ user }) {
  return (
    <div className="container mt-5">
      <h1>Welcome, {user.name}!</h1>
      <p>You have successfully logged in.</p>
      <p>Feel free to explore the application.</p>
    </div>
  );
}

export default Home;
