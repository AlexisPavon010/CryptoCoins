import axios from "axios"
import { useEffect, useState } from "react"

export default function useMarketCoins(page) {
    console.log(page)
    const [state, setState] = useState(null)

    useEffect(async () => {
        const res = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}`)
        const data = res.data
        setState(data)

    }, [page])

    return {
        markets: state
    }
}