'use client'
// Create frontend functionality to make API call
import { useState, useEffect } from "react"
import Coins from "./components/Coins"
import SearchCoins from "./components/SearchCoins"

export default function Home() {

  const [coins, setCoins] = useState ([])

  useEffect(() => {
    const getCoins = async () => {
      const response = await fetch('api/coins')
      const coins = await response.json()
      setCoins(coins.data.coins)
    }
    getCoins()
  }, [])

  return (
    <div className="text-center">
      <h2 className="font-bold text-6xl mt-14">Cryto Coins</h2>
      <SearchCoins getSearchResults={(result) => setCoins(result)}/>
      <Coins coins={coins}/>
    </div>
  )
}
