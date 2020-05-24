import React from 'react';

import './App.css';
import Profile from './profile/Profile'

function App() {
  return (
    <div className="App" style={{backgroundColor:"cyan"}}>
     <Profile fullName="Fares El Ouissi" bio="bio" profession="profession">
       <img style={{border:"solid 4px black"}}src="/photo.jpg" alt="profileimg" height="200px"></img>
     </Profile>
    </div>
  );
}

export default App;
