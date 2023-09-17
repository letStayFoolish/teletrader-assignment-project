import React from 'react'
import Navbar from "./Navbar/Navbar";

const Header = ({ isLoggedIn, handleOnLogin }) => {
  return (
    <header className='w-full flex justify-between items-center sticky container'>
      <a href='/' className='text-teal-400 text-2xl hover:opacity-75 transition-all'>
        TeleTrader
      </a>
      <Navbar isLoggedIn={isLoggedIn} handleOnLogin={handleOnLogin} />
    </header>
  )
}
export default Header
