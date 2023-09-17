import {BASE_URL} from "./constants";
import axios from "axios";

export const fetchFirst5Symbols = async () => {
  try {
    const response = await axios.get(`https://try.readme.io/https://api.bitfinex.com/v1/symbols`)
    // const response = await axios.get(`https://api.bitfinex.com/v1/symbols`)

    if (response.status === 200) {
      return response
    } else {
      console.error('Failed to fetch data: ', response.status, response.statusText)
    }

  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
}

export const fetchSymbolData = async (symbol) => {
  try {
    const response = await axios.get(`https://try.readme.io/https://api.bitfinex.com/v1/pubticker/${symbol}`)

    // console.log(symbol)
    // console.log(response)

    if (response.status === 200) {
      return response
    } else {
      console.error('Failed to fetch data: ', response.status, response.statusText)
    }

  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
}
