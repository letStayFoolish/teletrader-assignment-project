import {BASE_URL} from "./constants";

const checkResponse = async (res) => {
  if (res.ok) {
    return await res.json()
  } else {
    throw new Error(`Error: ${res.status}`)
  }
}

export const getSymbols = async () => {
  try {
    const response = await fetch(`${BASE_URL}/v1/symbols`, {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })

    return await checkResponse(response)

  } catch (err) {
    console.error(err)
  }
}
