import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import HomePage from './components/HomePage/HomePage';
import FormPage from './components/FormPage/FormPage';
import DetailPage from './components/DetailPage/DetailPage';

const App = () => {
  
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/formPage' element={<FormPage />}></Route>
        <Route path='/detailPage/:id' element={<DetailPage />}></Route>
      </Routes>
    </div>
  )
}

export default App