import React from 'react'
import {Heading} from 'native-base';
import './SplashScreen.css'
import Font from 'react-font'
import Loader from '../../components/Loader/Loader'


const SplashScreen = () => {
  return(
      <div className="container-fluid">
      <Heading color="black"  fontSize={{base: "md",md: "lg",lg: "6xl"}}><Font family='Times New Roman'>Elective Guide App</Font></Heading>
      <br/>
      <Loader/>
      </div>
  )
}

export default SplashScreen;