import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import SplashScreen from './pages/SplashScreen/SplashScreen';
import DashBoard from './pages/DashBorad/DashBoard';
import { NativeBaseProvider } from "native-base";
import Report from './pages/Report/Report';

function App() {
  return (
    <NativeBaseProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<SplashScreen />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/dashboard" element={<DashBoard />}></Route>
            <Route exact path="/report" element={<Report />}></Route>
          </Routes>
        </Router>
    </NativeBaseProvider>
  )
}

export default App