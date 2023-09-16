import React, {useEffect, useState} from 'react'
import {navLinks} from "../../../utils/constants";
import menu from '../../../assets/Icons/menu.svg'
import close from '../../../assets/Icons/close.svg'
import Button from "../../Button/Button";
import {Link, useLocation} from "react-router-dom";
const Navbar = ({ isLoggedIn, handleOnLogin }) => {
  const [active, setActive] = useState('Home')
  const [toggle, setToggle] = useState(false)
  const pathname = useLocation().pathname


  // @todo: Remove this useEffect, just for testing...
  useEffect(() => {
    console.log(pathname)
  }, [pathname])

  return (
    <nav className='flex py-6 justify-between items-center navbar m-0'>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-normal cursor-pointer text-[16px] mr-10 hover:opacity-50 transition-all ${pathname === `/${nav.id}` ? 'text-teal-400' : 'text-dimWhite'}`}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
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
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-medium cursor-pointer text-[16px] mb-5 last-of-type:mb-7 ${
                  active === nav.title ? 'text-teal-400' : 'text-dimWhite'
                } hover:opacity-50 transition-all mb-3`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
            {!isLoggedIn && <Button text='Login' handleOnClick={handleOnLogin} />}
          </ul>
        </div>
      </div>


    </nav>
  )
}
export default Navbar
