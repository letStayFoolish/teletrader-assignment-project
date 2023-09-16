import React from 'react'
import {currencyItems} from '../../utils/constants'
import icon from '../../assets/Icons/icon-01.png'
const Table = () => {
  return (
  <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="table-auto min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">Name</th>
              <th scope="col" className="px-6 py-4 text-center sm:text-left">Last</th>
              <th scope="col" className="px-6 py-4 hidden sm:table-cell">Change</th>
              <th scope="col" className="px-6 py-4 hidden sm:table-cell">Change Percent</th>
              <th scope="col" className="px-6 py-4 hidden xl:table-cell">High</th>
              <th scope="col" className="px-6 py-4 hidden xl:table-cell">Low</th>
            </tr>
            </thead>
            <tbody>
            {currencyItems.map((item, _index) => (
              <tr key={_index} className="border-b dark:border-neutral-500 cursor-pointer hover:opacity-75 hover:bg-teal-500 transition-all hover:text-white flip-in-hor-bottom">
                <td className="whitespace-nowrap px-6 py-4 font-medium flex gap-2 justify-start items-center">
                  <img src={icon} alt="Currency logo" className='object-contain h-[25px] w-[25px]'/>
                  {item.name}</td>
                <td className="whitespace-nowrap px-6 py-4 text-center sm:text-left">{item.last}</td>
                <td className="whitespace-nowrap px-6 py-4 hidden sm:table-cell">{item.change}</td>
                <td className={`whitespace-nowrap px-6 py-4 hidden sm:table-cell ${item.changePercent > 0 ? 'text-green-800' : 'accent-red-800' } `}>{item.changePercent}</td>
                <td className="whitespace-nowrap px-6 py-4 hidden xl:table-cell">{item.high}</td>
                <td className="whitespace-nowrap px-6 py-4 hidden xl:table-cell">{item.low}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Table
