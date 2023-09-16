import React, {useState} from 'react'
import icon from "../../assets/Icons/icon-01.png";
import {currencyItems} from '../../utils/constants'
import Button from "../../components/Button/Button";
const Details = () => {
  const [removeFromFavorites, setRemoveFromFavorites] = useState(true)

  return (
    <section>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 mt-[120px] mb-5">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="table-auto min-w-full text-left text-sm font-light swing-in-top-fwd">
              <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" className="px-6 py-4">Symbol</th>
                <th scope="col" className="px-6 py-4 text-center sm:text-left">Last Price</th>
                <th scope="col" className="px-6 py-4 hidden xl:table-cell">High</th>
                <th scope="col" className="px-6 py-4 hidden xl:table-cell">Low</th>
              </tr>
              </thead>
              <tbody>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 font-medium flex gap-2 justify-start items-center">
                  <img src={icon} alt="Currency logo" className='object-contain h-[25px] w-[25px]'/>
                  {currencyItems[0].name}</td>
                <td className="whitespace-nowrap px-6 py-4 text-center sm:text-left">{currencyItems[0].last}</td>
                <td className="whitespace-nowrap px-6 py-4 hidden xl:table-cell">{currencyItems[0].high}</td>
                <td className="whitespace-nowrap px-6 py-4 hidden xl:table-cell">{currencyItems[0].low}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Button text='Add to favorites' />
      <Button text='Remove from favorites' remove={removeFromFavorites} />
    </section>
  )
}
export default Details
