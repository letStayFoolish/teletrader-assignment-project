import React from 'react'

const Button = ({ text, remove, handleOnClick }) => {
  return (
    <button
      onClick={handleOnClick}
      type="button"
      className={`text-dimWhite text-[14px] py-1.5 px-3.5 flex justify-center items-center border-0 rounded hover:opacity-75 transition-all ${remove ? 'bg-red-700' : 'bg-teal-400'}`}
    >{text}</button>
  )
}
export default Button
