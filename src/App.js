import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, LoginPage, DetailPage, SearchPage } from 'pages';
import ComunityCreate from 'pages/community/Create';
import CommunityDetail from 'pages/community/Detail';
import CommunityList from 'pages/community/List';
import CommunityUpdate from 'pages/community/Update';
import StudyCreate from 'pages/studyComm/Create';
import StudyDetail from 'pages/studyComm/Detail';
import StudyList from 'pages/studyComm/List';
import StudyUpdate from 'pages/studyComm/Update';
import JobCreate from 'pages/jobComm/Create';
import JobDetail from 'pages/jobComm/Detail';
import JobList from 'pages/jobComm/List';
import JobUpdate from 'pages/jobComm/Update';
import QnACreate from 'pages/qnaComm/Create';
import QnaDetail from 'pages/qnaComm/Detail';
import QnAList from 'pages/qnaComm/List';
import QnAUpdate from 'pages/qnaComm/Update';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/detail' element={<DetailPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
      <Board />
    </>
  );
}

function Board() {
  return (
    <>
      <Routes>
        <Route path="/write" element={<ComunityCreate />} />
        <Route path='/Board/detail/:setid' element={<CommunityDetail />} />
        <Route path='/Board' element={<CommunityList />} />
        <Route path="/putndelete/:setid" element={<CommunityUpdate />} />
        <Route path='/studyWrite' element={<StudyCreate />} />
        <Route path='/studyBoard/detail/:setid' element={<StudyDetail />} />
        <Route path='/studyBoard' element={<StudyList />} />
        <Route path="/studyUpdate/:setid" element={<StudyUpdate />} />
        <Route path='/jobWrite' element={<JobCreate />} />
        <Route path='/jobBoard/detail/:setid' element={<JobDetail />} />
        <Route path='/jobBoard' element={<JobList />} />
        <Route path="/jobUpdate/:setid" element={<JobUpdate />} />
        <Route path='/qnaWrite' element={<QnACreate />} />
        <Route path='/qnaBoard/detail/:setid' element={<QnaDetail />} />
        <Route path='/qnaBoard' element={<QnAList />} />
        <Route path="/qnaUpdate/:setid" element={<QnAUpdate />} />
      </Routes>
    </>
  );
};

export default App;
