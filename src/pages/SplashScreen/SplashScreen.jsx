import React,{useEffect} from 'react'
import {Heading} from 'native-base';
import './SplashScreen.css'
import Font from 'react-font'
import Loader from '../../components/Loader/Loader'
import {useNavigate} from 'react-router-dom'


const SplashScreen = () => {

  const navigate = useNavigate()

  useEffect(() => {
   const redirectToLogin = ()=>{
    setTimeout(()=>{
      navigate('/login')
     },2000)
   }
   redirectToLogin()  
  },[])
  
  return(
      <div className="container-fluid">
      <Heading color="black"  fontSize={{base: "md",md: "lg",lg: "6xl"}}><Font family='Times New Roman'>Elective Guide App</Font></Heading>
      <br/>
      <Loader/>
      </div>
  )
}

export default SplashScreen;