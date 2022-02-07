/*eslint-disable */
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Leftheader from "./view/Leftheader";
import Community from './view/Community';
import Write from './view/Write';
import Readview from './view/Readview';
import Data from "./db/data.json"
import useFetch from './hooks/useFetch';

function App() {

  let [community, setCommunity] = useState(true);

  function showCommnutiy() {
    setCommunity(!community);
  };

  let Data = useFetch("http://localhost:3001/titles");

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Leftheader showCommnutiy={showCommnutiy}></Leftheader>}>
          <Route path='/*' element={community === true
            ? <Community ></Community>
            : null
          } />

        </Route>
        <Route path="/write" element={<Write></Write>}>
        </Route>
        <Route path="/read" element={<Readview Data={Data}></Readview>}></Route>
      </Routes>
    </div >
  );
}

export default App;
