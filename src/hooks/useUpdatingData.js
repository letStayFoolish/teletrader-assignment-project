// import { useEffect, useState } from "react";
//
// const useUpdatingData = (symbols) => {
//   const [currencyData, setCurrencyData] = useState([])
//   const [currencySymbols, setCurrencySymbols] = useState([])
//   const [isLoaded, setIsLoaded] = useState(false)
//
//   const subscribedHandler = (responseData) => {
//     const { chanId: id, pair: crypto } = responseData
//
//     const initialValues = {
//       last: 0,
//       change: 0,
//       changePercent: 0,
//       high: 0,
//       low: 0,
//     }
//
//     setCurrencySymbols((prevState) => [...prevState, { id: Number([id]), name: crypto }])
//     setCurrencyData((prevState) => [...prevState, { id: Number([id]), values: initialValues }])
//   }
//
//   const handleUpdate = (responseData) => {
//     const id = responseData[0]
//     const resultList = responseData[1]
//
//     const newValues = {
//       last: resultList[6],
//       change: resultList[4],
//       changePercent: resultList[5],
//       high: resultList[8],
//       low: resultList[9],
//     }
//
//     setCurrencyData(prevState => {
//       const
//     })
//   }
// }

import { useEffect, useState } from "react";

const UPDATED_RESULTS_COUNT = 10;

function useUpdatingData(symbols) {
  const [cryptoData, setCryptoData] = useState([]);
  const [cryptoNames, setCryptoNames] = useState([]);
  const [resultsLoaded, setResultsLoaded] = useState(false);

  function subscribedHandler(responseData) {
    const { chanId: id, pair: crypto } = responseData;

    const initialValues = {
      lastPrice: 0,
      dailyChange: 0,
      dailyChangePercent: 0,
      dailyHigh: 0,
      dailyLow: 0,
    };

    setCryptoNames((prevCryptoNames) => [...prevCryptoNames, { id: Number([id]), name: crypto }]);
    setCryptoData((prevData) => [...prevData, { id: Number([id]), values: initialValues }]);
  }

  function updatedResultsHandler(responseData) {
    const id = responseData[0];
    const resultList = responseData[1];

    const newValues = {
      lastPrice: resultList[6],
      dailyChange: resultList[4],
      dailyChangePercent: resultList[5],
      dailyHigh: resultList[8],
      dailyLow: resultList[9],
    };

    setCryptoData((prevData) => {
      const updatedData = [...prevData];
      const existingIndex = updatedData.findIndex((item) => item.id === id);

      if (existingIndex === -1) {
        return updatedData;
      } else {
        updatedData[existingIndex] = { id: Number([id]), values: newValues };
        return updatedData;
      }
    });
  }

  useEffect(() => {
    if (!symbols) {
      return;
    }
    const webSocket = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

    webSocket.onmessage = (message) => {
      const responseData = JSON.parse(message.data);

      if (responseData?.event === "subscribed") {
        subscribedHandler(responseData);
      } else if (Array.isArray(responseData) && responseData[1].length === UPDATED_RESULTS_COUNT) {
        updatedResultsHandler(responseData);
      }

      setResultsLoaded(true);
    };

    webSocket.onopen = () => {
      symbols.forEach((symbol) => {
        const payload = JSON.stringify({
          event: "subscribe",
          channel: "ticker",
          symbol: `t${symbol}`,
        });

        webSocket.send(payload);
      });
    };

    return () => {
      if (webSocket.readyState === 1) {
        webSocket.close();
      }
    };
  }, [symbols]);

  return { cryptoData, cryptoNames, resultsLoaded };
}

export default useUpdatingData;
