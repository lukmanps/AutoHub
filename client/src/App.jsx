import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Profile from './pages/Profile';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Toaster />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
