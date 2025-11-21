import React from 'react'
import { MdHomeWork } from 'react-icons/md'
import { Route, Routes } from 'react-router-dom'
import HomeMain from './Components/HomeMain'
import Navbar from './Components/Navbar'

import AdminLogin from './Pages/AdminLogin'
import AdminSignup from './Pages/AdminSignup'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup/>} />
        
      </Routes>
    </div>
  );
}

export default App
