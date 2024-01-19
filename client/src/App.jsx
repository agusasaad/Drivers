import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import HomePage from './components/HomePage/HomePage';
import FormPage from './components/FormPage/FormPage';
import DetailPage from './components/DetailPage/DetailPage';
import Spinner from './components/Spinner/Spinner';
import SpinnerForm from './components/SpinnerForm/SpinnerForm';

const App = () => {
  
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/formPage' element={<FormPage />}></Route>
        <Route path='/detailPage/:id' element={<DetailPage />}></Route>
        <Route path='/spinner' element={<Spinner />}></Route>
        <Route path='/spinnerForm' element={<SpinnerForm/>}></Route>
      </Routes>
    </div>
  )
}

export default App