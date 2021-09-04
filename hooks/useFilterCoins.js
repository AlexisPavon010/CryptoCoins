import axios from "axios"
import { useEffect, useState } from "react"

export default function useFilterCoins(search) {

    const [state, setState] = useState(null)

    useEffect(async () => {
        const res = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1`)
        const data = res.data
        const filterCoins = data?.filter((coin)=> coin.name.toLowerCase().includes(search.toLowerCase()))
        setState(filterCoins)
    }, [search])

    return {
        markets: state
    }
}