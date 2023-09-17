import React from 'react'
import {useNavigate} from "react-router-dom";
import {formatNumber} from "../../utils/utils";
import Loader from "../Loader/Loader";

const Table = ({ cryptoData, cryptoNames, isLoading }) => {

  const navigate = useNavigate()
  const handleOnClick = (symbol) => {
    navigate(`/details/${symbol}`)
  }

  return (
    isLoading && cryptoData ? <Loader /> : (
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="table-auto min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-4 py-4">Name</th>
                  <th scope="col" className="px-4 py-4 sm:text-center text-right">Last</th>
                  <th scope="col" className="px-4 py-4 hidden text-center sm:table-cell">Change</th>
                  <th scope="col" className="px-4 py-4 hidden text-center sm:table-cell w-[180px]">Change Percent</th>
                  <th scope="col" className="px-4 py-4 hidden text-center md:table-cell">High</th>
                  <th scope="col" className="px-4 py-4 hidden text-center xl:table-cell">Low</th>
                </tr>
                </thead>
                <tbody>
                {cryptoData?.map((item, _index) => {
                  const cryptoName = cryptoNames.find(i => i.id === item.id).name

                  return (
                    <tr
                      key={_index}
                      className="border-b dark:border-neutral-500 hover:opacity-75 hover:bg-teal-500 transition-all hover:text-white flip-in-hor-bottom">
                      <td
                        onClick={() => handleOnClick(cryptoName)}
                        className="whitespace-nowrap px-4 py-4 font-medium flex gap-2 justify-start cryptos-center cursor-pointer"
                      >{cryptoName}</td>
                      <td className="whitespace-nowrap px-4 py-4 sm:text-center text-right">{formatNumber(item.values.lastPrice)}</td>
                      <td className={`whitespace-nowrap px-4 py-4 hidden text-center sm:table-cell ${formatNumber(item.values.change) > 0.0 ? 'text-green-800' : 'text-red-700' }`}>{formatNumber(item.values.change)}</td>
                      <td className={`whitespace-nowrap px-4 py-4 hidden text-center sm:table-cell ${formatNumber(item.values.changePercent) > 0.0 ? 'text-green-800' : 'text-red-700' } `}>{formatNumber(item.values.changePercent)}%</td>
                      <td className="whitespace-nowrap px-4 py-4 hidden text-center md:table-cell">{formatNumber(item.values.high)}</td>
                      <td className="whitespace-nowrap px-4 py-4 hidden text-center xl:table-cell">{formatNumber(item.values.low)}</td>
                    </tr>
                  )
                })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
export default Table
