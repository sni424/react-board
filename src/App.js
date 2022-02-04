import React, { useState } from 'react';
import './App.css';
import Leftheader from './view/Leftheader';
import Community from './view/Community';
import MainCommunity from './view/MainCommunity';

function App() {

  let [community, setCommunity] = useState(true);

  function showCommnutiy() {
    setCommunity(!community);
  };

  return (
    <div className="App">
      <Leftheader showCommnutiy={showCommnutiy}></Leftheader>
      {community === true
        ? <Community></Community>
        : null}
      <MainCommunity></MainCommunity>
    </div>
  );
}

export default App;
