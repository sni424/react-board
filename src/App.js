import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, LoginPage, DetailPage, SearchPage } from 'pages';
import ComunityCreate from 'pages/community/Create';
import CommunityDetail from 'pages/community/Detail';
import CommunityList from 'pages/community/List';
import CommunityUpdate from 'pages/community/Update';

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/detail' element={<DetailPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path="/write" element={<ComunityCreate />}></Route>
      <Route path="/putndelete/:setid" element={<CommunityUpdate />}></Route>
      <Route path='/Board/detail/:setid' element={<CommunityDetail />}></Route>
      <Route path='/Board' element={<CommunityList />}></Route>
    </Routes>
  );
}

export default App;
