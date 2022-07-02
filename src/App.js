import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import SplashScreen from './pages/SplashScreen/SplashScreen';
import DashBoard from './pages/DashBorad/DashBoard';
import { NativeBaseProvider } from "native-base";

function App() {
  return (
    <NativeBaseProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/login" element={<SplashScreen />}></Route>
            <Route exact path="/dashboard" element={<DashBoard />}></Route>
          </Routes>
        </Router>
    </NativeBaseProvider>
  )
}

export default App