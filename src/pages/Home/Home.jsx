import React, {useEffect, useState} from 'react'
import Table from "../../components/Table/Table";
import {fetchFirst5Symbols} from "../../utils/api";
import useUpdatingData from "../../hooks/useUpdatingData";

const Home = () => {
  const [symbols, setSymbols] = useState([])
  const { cryptoData, cryptoNames, isLoading } = useUpdatingData(symbols)

  const handleGetSymbols = async () => {
    try {
      const response = await fetchFirst5Symbols()
      const symbolList = await response.data.slice(0, 5).map(symbol => symbol.toUpperCase())
      setSymbols(symbolList)

    } catch (error) {
      console.error('Error:', error.message)
    } finally {
    }
  }

  useEffect(() => {
    handleGetSymbols()
  }, []);

  return (
    <section className='my-[120px]'>
      <Table cryptoData={cryptoData} cryptoNames={cryptoNames} isLoading={isLoading} />
    </section>
  )
}
export default Home
