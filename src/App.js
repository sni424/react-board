/*eslint-disable */
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Leftheader from "./view/Leftheader";
import Community from './view/Community';
import Write from './view/Write';
import Readview from './view/Readview';
import Setview from './view/Setview';
import useFetch from './hooks/useFetch';

function App() {

  let [community, setCommunity] = useState(true);

  function showCommnutiy() {
    setCommunity(!community);
  };

  let [Data, setData] = useState([]);
  useEffect(() => {
    const reloadProfile = async () => {
      try {
        let profileData = await fetch("http://localhost:3001/titles");
        let newData = await profileData.json();
        return setData(newData);
      } catch (error) {
        console.log(error)
      }
    };
    reloadProfile();
  }, ["http://localhost:3001/titles"]);

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Leftheader Data={Data} showCommnutiy={showCommnutiy}></Leftheader>}>
          <Route path='/*' element={community === true
            ? <Community ></Community>
            : null
          } />

        </Route>
        <Route path="/write" element={<Write Data={Data}></Write>}>
        </Route>
        <Route path="/:link_id" element={<Readview Data={Data}></Readview>}></Route>
        <Route path="/setview:link_id" element={<Setview Data={Data}></Setview>}></Route>
      </Routes>
    </div >
  );
}

export default App;
