import React, {Link} from 'react'
import logo from '../../assets/logo.png';
import Signup from '../Signup/Signup';
import "./SplashScreen.css"
const SplashScreen = () => {
  return (
    <div className='content'>
        <img src={logo} alt="Loading.." className='SplashImage'/>
        <h1>SAYLANI WELFARE</h1>
        <h3>Online Discount Store</h3>
        <a href='/signup'><button className='btn'>Get Started</button></a>
    </div>
  )
}

export default SplashScreen