import axios from "axios";

export const fetchFirst5Symbols = async () => {
  try {
    // const response = await axios.get(`/bitfinex-symbols`)
    const response = await axios.get(`https://api.bitfinex.com/v1/symbols`)

    if (response.status === 200) {
      const symbolList = await response.data.slice(0, 5).map(symbol => symbol.toUpperCase())
      return symbolList
    } else {
      console.error('Failed to fetch data: ', response.status, response.statusText)
    }

  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
}

export const fetchSymbolData = async (symbol) => {
  try {
    const response = await axios.get(`/bitfinex-pubticker/${symbol}`)

    if (response.status === 200) {
      return response
    } else {
      console.error('Failed to fetch data: ', response.status, response.statusText)
    }

  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
}
