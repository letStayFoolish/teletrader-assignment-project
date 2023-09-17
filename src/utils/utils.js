// const handleOnMappingThroughSymbols = (symbols) => {
//   if (!symbols) {
//     return;
//   }
//   return symbols.map((symbol) =>
//     JSON.stringify({
//       event: "subscribe",
//       channel: "ticker",
//       symbol: `t${symbol.toUpperCase()}`,
//     })
//   );
// };
//
// export default handleOnMappingThroughSymbols;

export function formatNumber(number) {
  // Check if the input is a valid number
  if (typeof number !== 'number' && isNaN(number)) {
    return 'Invalid input'
  }

  // Format the number with two decimal places
  const formattedNumber = number.toFixed(2)

  // Use regular expression to add thousands separators
  const regex = /\B(?=(\d{3})+(?!\d))/g;
  return formattedNumber.replace(regex, ',')
}


export const handleSaveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}

export const handleGetFromLocalStorage = (key) => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null;
}
