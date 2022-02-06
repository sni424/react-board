/*eslint-disable */
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Leftheader from './view/Leftheader';
import Community from './view/Community';
import Write from './view/Write';
import Data from "./db/data.json"

function App() {

  let [community, setCommunity] = useState(true);

  function showCommnutiy() {
    setCommunity(!community);
  };

  useEffect(() => {
    console.log(Data.titles);
  });


  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Leftheader showCommnutiy={showCommnutiy}></Leftheader>}>
          <Route path='/*' element={community === true
            ? <Community></Community>
            : null
          } />

        </Route>
        <Route path="/write" element={<Write></Write>}>
        </Route>
      </Routes>
    </div >
  );
}

export default App;
