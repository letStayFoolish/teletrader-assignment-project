import React, {useEffect, useState} from 'react'
import Table from "../../components/Table/Table";
import useUpdatingData from "../../hooks/useUpdatingData";
import {handleGetFromLocalStorage} from "../../utils/utils";

const Favorites = () => {
  const [symbols, setSymbols] = useState([])
  const { cryptoData, cryptoNames, isLoading } = useUpdatingData(symbols)
  const [noData, setNoData] = useState(false)


  useEffect(() => {
    const data = handleGetFromLocalStorage('symbol')
    if (data) {
      setSymbols(data)
    } else {

    }
  }, []);

  return (
    <section className='my-[120px]'>
      <Table cryptoData={cryptoData} cryptoNames={cryptoNames} isLoading={isLoading} />
    </section>
  )
}
export default Favorites
