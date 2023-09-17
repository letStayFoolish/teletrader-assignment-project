import React from 'react'
import Navbar from "./Navbar/Navbar";
import logo from '../../assets/Header/Logo/logo.png'

const Header = ({ isLoggedIn, handleOnLogin }) => {
  return (
    <header className='w-full flex justify-between items-center sticky container'>
      <a href='/' className='text-teal-400 text-2xl hover:opacity-75 transition-all'>
        TeleTrader
        {/*<img src={logo} alt="Logo" className='w-[140px] h-[32px]'/>*/}
      </a>
      <Navbar isLoggedIn={isLoggedIn} handleOnLogin={handleOnLogin} />
    </header>
  )
}
export default Header
