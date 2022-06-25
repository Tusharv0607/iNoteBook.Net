import React from 'react';
import Notes from './Notes';

const Home = () => {
  const username = localStorage.getItem('userName');
  return (
    <div className="container my-3">
      <h2 className='mainHead'>Hi {username}! Welcome to iNoteBook...</h2>
      <Notes/>
    </div>
  )
};

export default Home;
