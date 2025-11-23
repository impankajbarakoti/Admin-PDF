import React from 'react'
import { MdHomeWork } from 'react-icons/md'
import { Route, Routes } from 'react-router-dom'
import HomeMain from './Components/HomeMain'


// import AdminLogin from './Pages/AdminLogin'
import AdminSignup from './Pages/AdminSignup'
import Dashboard from './Pages/Dashboard.jsx'
// import PostBooks from './Pages/PostBooks.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/admin/login" element={<Dashboard />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        {/* <Route path="/PostBook" element={<PostBooks/>} />  */}
      </Routes>
    </div>
  );
}

export default App
