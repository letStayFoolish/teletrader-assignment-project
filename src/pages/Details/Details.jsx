import React, {useEffect, useState} from 'react'
import Button from "../../components/Button/Button";
import {useParams} from "react-router-dom";
import {fetchSymbolData} from "../../utils/api";
import {formatNumber, handleGetFromLocalStorage, handleSaveToLocalStorage} from "../../utils/utils";
const Details = ({ isLoggedIn }) => {
  const [removeFromFavorites, setRemoveFromFavorites] = useState(true)
  const [isFavorite, setIsFavorite] = useState(false)
  const [favoriteList, setFavoriteList] = useState([])
  const [fixedCryptoData, setFixedCryptoData] = useState({
    last: 0,
    high: 0,
    low: 0,
  })

  let { symbol } = useParams()

  const handleFetchData = async () => {
    const response = await fetchSymbolData(symbol)
    const data = await response.data

    setFixedCryptoData({
      last: Number(data.last_price),
      high: Number(data.high),
      low: Number(data.low),

    })
  }

  const handleAddToFavorites = () => {
    setIsFavorite(true)
    // setFavoriteList([symbol, ...favoriteList])
    handleSaveToLocalStorage('symbol', [...favoriteList, symbol]) // OK !!!

    const dataFromLocalStorage =  handleGetFromLocalStorage('symbol')

    setFavoriteList(dataFromLocalStorage)

    console.log(dataFromLocalStorage)
  }


  const handleRemoveFromFavorites = () => {
    setIsFavorite(false)
    const itemToDelete = symbol

    if (favoriteList.length) {
      handleSaveToLocalStorage('symbol', favoriteList.filter((item) => item !== itemToDelete))
      setFavoriteList(favoriteList.filter((item) => item !== itemToDelete))
    }

  }

  useEffect(() => {
    handleFetchData()
    const data = handleGetFromLocalStorage('symbol')

    if (data.includes(symbol)) {
      setIsFavorite(true)
    } else {
      setIsFavorite(false)
    }

    setFavoriteList(data)
  }, []);

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
                <td className="whitespace-nowrap px-6 py-4 font-medium flex gap-2 justify-start items-center">{symbol}</td>
                <td className="whitespace-nowrap px-6 py-4 text-center sm:text-left">{formatNumber(fixedCryptoData.last)}</td>
                <td className="whitespace-nowrap px-6 py-4 hidden xl:table-cell">{formatNumber(fixedCryptoData.high)}</td>
                <td className="whitespace-nowrap px-6 py-4 hidden xl:table-cell">{formatNumber(fixedCryptoData.low)}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isLoggedIn && !isFavorite && <Button text='Add to favorites' handleOnClick={handleAddToFavorites} />}
      {isLoggedIn && isFavorite && <Button text='Remove from favorites' remove={removeFromFavorites} handleOnClick={handleRemoveFromFavorites} />}
    </section>
  )
}
export default Details
