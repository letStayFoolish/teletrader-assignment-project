import React, {useEffect, useState} from 'react'
import Table from "../../components/Table/Table";
import {fetchFirst5Symbols} from "../../utils/api";
import useUpdatingData from "../../hooks/useUpdatingData";

const Home = () => {
  const [symbols, setSymbols] = useState([])
  const { cryptoData, cryptoNames, resultsLoaded } = useUpdatingData(symbols)

  const handleGetSymbols = async () => {
    try {
      const symbolList = await fetchFirst5Symbols()

      setSymbols(symbolList.map(symbol => symbol.toUpperCase()))

    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  useEffect(() => {
    handleGetSymbols()
  }, []);

  return (
    <section className='my-[120px]'>
      <Table cryptoData={cryptoData} cryptoNames={cryptoNames} resultsLoaded={resultsLoaded} />
    </section>
  )
}
export default Home
