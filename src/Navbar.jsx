import React, { useState, useEffect, useCallback } from 'react';
import './components/styles/Navbar.css';
import Logo from './components/assets/logo.png';
// import Navbar from './App';

import { useNavigate, Link, redirect } from 'react-router-dom'



function Navbar(props) {
  const navigate = useNavigate()

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  })
  const logOutFn = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    navigate('/login')
  }
  const logInFn = () => {
    navigate('/login')
  }

  return (

    <div className='navbar'>
      <div className='leftSide'>
        <img className="logo" src={Logo} />
      </div>
      <div className='rightSide'>
        <Link to={'/'} ><div> Home </div></Link>
        {isLoggedIn ? <Link to={'/programari'} > <div > Programari </div></Link> : ""}
        {isLoggedIn ? <div onClick={logOutFn}> LogOut </div>
          : <div onClick={logInFn}> Login </div>}

      </div>
    </div>

  )
}



export default Navbar;


