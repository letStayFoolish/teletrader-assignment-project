import React from 'react'
import {footerLinks, socialMedia} from "../../utils/constants";

const Footer = () => {
  return (
    <footer className='w-full text-center md:text-left  flex flex-col my-8'>
      <div className='flex md:flex-row flex-col md:justify-start'>
        <div className="flex flex-col justify-start md:mr-5">
          <h3 className='text-[20px] font-medium text-teal-400 mb-2 hover:opacity-75 transition-all'>
            <a href="https://www.teletrader.rs/" target='_blank' rel='noopener noreferrer'>TeleTrader</a>
          </h3>
          <p className='uppercase font-normal text-base mb-2 tracking-out-expand'>A step ahead of market</p>
        </div>

        <div className='hidden md:flex flex-1 justify-end md:mt-0 mt-10 mb-4'>
            {footerLinks.map((link, _index) => (
              <div key={_index} className='flex flex-col sm:my-0 my-4 mr-16 last:mr-0'>
                <h4 className='font-medium text-[18px] leading-[27px]'>{link.title}</h4>

                <ul className='list-none mt-4'>
                  {link.links.map((l, _i) => (
                    <li
                      key={_i}
                      className={`font-normal text-[16px] leading-[18px] text-dimWhite hover:opacity-75 transition-all cursor-pointer ${
                        _i !== link.links.length - 1 ? 'mb-2' : 'mb-0'
                      }`}
                    >
                      <a href={l.link} target='_blank' rel='noopener noreferrer'>{l.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
        <p className='font-normal text-center text-[14px] leading-[16px] mb-3 md:mb-0'>
          Copyright Ⓒ 2023 TeleTrader. All Rights Reserved.
        </p>
        <p className='font-normal text-center text-[14px] leading-[16px]'>
          Coded by <strong>Nemanja Karaklajic</strong>
        </p>

      </div>
      <div className='flex flex-row justify-center md:justify-end md:mt-2 mt-6'>
        <ul className="list-none flex flex-row">
          {socialMedia.map((social) => (
            <li key={social.id} className='w-[21px] h-[21px] cursor-pointer hover:opacity-75 transition-all mr-6 last:mr-0'>
              <a target='_blank' rel='noopener noreferrer' href={social.link}>{social.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
export default Footer
