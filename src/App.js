/*eslint-disable */
import React, { useState } from 'react';
import { Route, Routes, Link, Switch } from 'react-router-dom';
import './App.css';
import Leftheader from './view/Leftheader';
import Community from './view/Community';
import MainCommunity from './view/MainCommunity';
import Write from './view/Write';

function App() {

  let [community, setCommunity] = useState(true);

  function showCommnutiy() {
    setCommunity(!community);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Leftheader showCommnutiy={showCommnutiy}></Leftheader>
          {community === true
            ? <Community></Community>
            : null}
          <MainCommunity></MainCommunity>
        </Route>
        <Route path="/write" >
          <Write></Write>
        </Route>
      </Switch>
    </div >
  );
}

export default App;
