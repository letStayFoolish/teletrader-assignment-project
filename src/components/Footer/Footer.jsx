import React from 'react'
import {footerLinks, socialMedia} from "../../utils/constants";

const Footer = () => {
  return (
    <footer className='w-full container text-center md:text-left  flex flex-col my-8'>
      <div className='flex md:flex-row flex-col md:justify-start'>
        <div className="flex flex-col justify-start md:min-w-[300px] md:mr-10">
          <h3 className='text-[20px] font-medium text-teal-400 mb-2'>TeleTrader</h3>
          <p className='uppercase font-normal text-base mb-2 tracking-out-expand'>A step ahead of market</p>
        </div>

        <div className='hidden md:flex flex-1 justify-between md:mt-0 mt-10 mb-4'>
            {footerLinks.map((link, _index) => (
              <div key={_index} className='flex flex-col sm:my-0 my-4 min-w-[150px]'>
                <h4 className='font-medium text-[18px] leading-[27px]'>{link.title}</h4>

                <ul className='list-none mt-4'>
                  {link.links.map((l, _i) => (
                    <li
                      key={_i}
                      className={`font-normal text-[16px] leading-[18px] text-dimWhite hover:opacity-75 transition-all cursor-pointer ${
                        _i !== link.links.length - 1 ? 'mb-2' : 'mb-0'
                      }`}
                    >
                      {l.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
        <p className='font-normal text-center text-[14px] leading-[16px] mb-3 md:mb-0'>
          Copyright Ⓒ 2023 TaleTrader. All Rights Reserved.
        </p>
        <p className='font-normal text-center text-[14px] leading-[16px]'>
          Coded by <strong>Nemanja Karaklajic</strong>
        </p>

      </div>
      <div className='flex flex-row justify-center md:justify-end md:mt-2 mt-6'>
        <ul className="list-none flex flex-row">
          {socialMedia.map((social) => (
            <li key={social.id} className='w-[21px] h-[21px] cursor-pointer hover:opacity-75 transition-all mr-6 last:mr-0'><a target='_blank' href={social.link}>{social.icon}</a></li>
          ))}
        </ul>
      </div>






      {/*<div className='flex flex-col sm:flex-row sm:justify-between justify-center items-center sm:items-end py-3 w-full border-b-2 border-b-gray-400'>*/}
      {/*  <div className='flex flex-col justify-center '>*/}
      {/*    <h3 className='text-xl text-teal-400 mb-2'>TeleTrader</h3>*/}
      {/*    <p className='uppercase font-normal text-base mb-2 tracking-out-expand'>A step ahead of market</p>*/}
      {/*    <ul className='gap-2 hidden sm:block'>*/}
      {/*      <li className='cursor-pointer hover:opacity-75 mb-2'>*/}
      {/*        <a href="https://www.teletrader.rs/" className='text-sm'>Teletrader d.o.o.</a>*/}
      {/*      </li>*/}
      {/*      <li>*/}
      {/*        <p className='text-sm'>Location: <strong>Bulevar vojvode Misica 39a, Belgrade</strong> </p>*/}
      {/*      </li>*/}
      {/*      <li>*/}
      {/*        <a href="https://www.teletrader.rs/" target='_blank'></a>*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <p className='text-sm'>*/}
      {/*      coded by <strong>Nemanja Karaklajic</strong>*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className='w-full flex justify-center items-center mt-6'>*/}
      {/*  <nav className='flex flex-row gap-4'>*/}
      {/*    <a*/}
      {/*      href="https://github.com/letStayFoolish"*/}
      {/*      className='object-contain cursor-pointer hover:opacity-75 transition-all'*/}
      {/*      target='_blank'*/}
      {/*    >*/}
      {/*      <AiFillGithub />*/}
      {/*    </a>*/}
      {/*    <a*/}
      {/*      href="https://www.linkedin.com/in/nemanjakaraklajic30111990/"*/}
      {/*      className='object-contain cursor-pointer hover:opacity-75 transition-all'*/}
      {/*      target='_blank'*/}
      {/*    >*/}
      {/*      <GrLinkedin />*/}
      {/*    </a>*/}
      {/*    <a*/}
      {/*      href="mailto:nemanjakaraklajic90@gmail.com"*/}
      {/*      className='object-contain cursor-pointer hover:opacity-75 transition-all'*/}
      {/*      target='_blank'*/}
      {/*    >*/}
      {/*      <MdEmail />*/}
      {/*    </a>*/}
      {/*  </nav>*/}
      {/*</div>*/}

    </footer>
  )
}
export default Footer