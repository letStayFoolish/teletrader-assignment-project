import {BASE_URL} from "./constants";
import axios from "axios";

export const fetchFirst5Symbols = async () => {
  try {
    const response = await axios.get(`https://try.readme.io/https://api.bitfinex.com/v1/symbols`)

    if (response.status === 200) {
      const symbols = response.data.slice(0, 5)
      console.log('First 5 symbols', symbols)
    } else {
      console.error('Failed to fetch data: ', response.status, response.statusText)
    }

  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
}
