import React, {useState} from 'react'
import menu from '../../../assets/Icons/menu.svg'
import close from '../../../assets/Icons/close.svg'
import Button from "../../Button/Button";
import {Link, useLocation} from "react-router-dom";
const Navbar = ({ isLoggedIn, handleOnLogin }) => {
  const [toggle, setToggle] = useState(false)
  const pathname = useLocation().pathname

  const handleOnClick = () => {
    handleOnLogin()
    setToggle(false)
  }


  return (
    <nav className='flex py-6 justify-between items-center navbar m-0'>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        <li
          className={`font-normal cursor-pointer text-[16px] mr-10 hover:opacity-50 transition-all ${pathname === `/` ? 'text-teal-400' : 'text-dimWhite'}`}
        >
          <Link to={`/`}>Home</Link>
        </li>
        <li
          className={`font-normal cursor-pointer text-[16px] mr-10 hover:opacity-50 transition-all ${pathname === `/favorites` ? 'text-teal-400' : 'text-dimWhite'}`}
        >
          {isLoggedIn && <Link to={`/favorites`}>Favorites</Link>}
        </li>
      </ul>
      <div className='sm:flex hidden'>
        {!isLoggedIn && <Button text='Login' handleOnClick={handleOnLogin} />}
      </div>


      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={ toggle ? close : menu }
          alt="menu"
          onClick={() => setToggle(!toggle)}
          className='w-[28px] h-[28px] object-contain cursor-pointer hover:opacity-50 transition-all'
        />

        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black-gradient absolute z-30 top-20 left-0 right-0 w-full rounded-xl sidebar`}>
          <ul className='list-none flex justify-end items-start flex-1 flex-col'>
            <li
              className={`font-normal cursor-pointer text-[16px] mb-6 hover:opacity-50 transition-all ${pathname === `/` ? 'text-teal-400' : 'text-dimWhite'}`}
            >
              <Link to={`/`} onClick={() => setToggle(!toggle)}>Home</Link>
            </li>
            <li
              className={`font-normal cursor-pointer text-[16px] hover:opacity-50 transition-all ${pathname === `/favorites` ? 'text-teal-400' : 'text-dimWhite'}`}
            >
              {isLoggedIn && <Link to={`/favorites`} onClick={() => setToggle(!toggle)}>Favorites</Link>}
            </li>
            {!isLoggedIn && <Button text='Login' handleOnClick={handleOnClick} />}
          </ul>
        </div>
      </div>


    </nav>
  )
}
export default Navbar
