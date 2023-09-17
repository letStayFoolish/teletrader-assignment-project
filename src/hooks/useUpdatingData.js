import { useEffect, useState } from "react";
import WebSocket from "websocket";

const useUpdatingData = (symbols) => {
  const [cryptoData, setCryptoData] = useState([])
  const [cryptoNames, setCryptoNames] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  const handleInitialData = (data) => {
    const { chanId: id, pair: crypto } = data

    const initialValues = {
      lastPrice: 0,
      change: 0,
      changePercent: 0,
      high: 0,
      low: 0,
    }

    setCryptoNames(prevState => [...prevState, { id: Number([id]), name: crypto }])
    setCryptoData(prevState => [...prevState, { id: Number([id]), values: initialValues }])
  }

  const handleUpdateData = (data) => {
    const id = data[0]

    const updatedValues = {
      lastPrice: data[1][6],
      change: data[1][4],
      changePercent: data[1][5],
      high: data[1][8],
      low: data[1][9],
    }

    setCryptoData((prevState) => {
      const currentData = [...prevState]
      const index = currentData.findIndex(item => item.id === id)

      if (index === -1) {
        return currentData
      } else {
        currentData[index] = { id: Number([id]), values: updatedValues }
        return currentData
      }
    })
  }

  useEffect(() => {
    if (!symbols) {
      return
    }

    setIsLoading(true)

    const ws = new WebSocket.w3cwebsocket('wss://api-pub.bitfinex.com/ws/2')

    ws.onopen = () => {
      symbols.forEach(symbol => {
        const payload = JSON.stringify({
          event: 'subscribe',
          channel: 'ticker',
          symbol: `t${symbol}`
        })
        ws.send(payload)
      })
    }

    ws.onmessage = (message) => {
      const data = JSON.parse(message.data)

      if (data?.event === 'subscribed') {
        handleInitialData(data)
      } else if (Array.isArray(data) && data[1].length === 10) {
        handleUpdateData(data)
      }
      setIsLoading(false)

      // console.log(data)
    }

    ws.onclose = () => {
      console.log('WebSocket connection closed')
    }

    return () => {
      ws.close()
    }

  }, [symbols]);

  return { cryptoData, cryptoNames, isLoading }
}

export default useUpdatingData;
