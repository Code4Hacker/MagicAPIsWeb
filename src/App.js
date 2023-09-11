import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Navigator } from './components';
import { Images, Movies, Nasa, Weather } from './components/Pages';
import Movie from './components/Pages/Movies/movie/Movie';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div><Navigator /><Home /></div>} />
        <Route path="/weather" element={<div><Navigator/><Weather /></div>} />
        <Route path="/images" element={<div><Navigator/><Images /></div>} />
        <Route path="/movies" element={<div><Navigator/><Movies /></div>} />
        <Route path="/nasa" element={<div><Navigator/><Nasa /></div>} />
        <Route path="/movie/:id" element={<div><Navigator/><Movie /></div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;