import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import About from './pages/About';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={Home} />
        <Route path='/login' element={Signin} />
        <Route path='/register' element={Signup} />
        <Route path='/about' element={About} />
        <Route path='/profile' element={Profile} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
