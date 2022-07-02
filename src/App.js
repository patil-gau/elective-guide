import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './pages/Login/Login';
import SplashScreen from './pages/SplashScreen/SplashScreen';
import DashBoard from './pages/DashBorad/DashBoard';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<SplashScreen/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/dashboard" element={<DashBoard/>}></Route>
        </Routes>
      </Router>
  )
}

export default App