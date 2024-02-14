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
import { PrivateRoute } from './routes/private/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UserListings from './pages/UserListings';
import Listing from './pages/Listing';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/listing/:id' element={<Listing />} />
        
        <Route path='/register' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={ <CreateListing />} />
          <Route path='/user-listing' element={<UserListings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
