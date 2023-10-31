import { NextResponse } from "next/server";


async function fetchCoin(){
    const response = await fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', {
        "method": "GET",
        "headers": {
            'X-RapidAPI-Key': '0179e1854dmsh3803761bb905deap13063fjsn456365ee050a',
		    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    })
    const coins = await response.json()
    return coins
}

export async function GET(request){
    const coins = await fetchCoin()
    // request = demande
    const {searchParams} = new URL(request.url)
    console.log(request.url);
    const query = searchParams.get('query')

    const fliteredCoins = coins.data.coins.filter((coin) =>{
        return coin.name.toLowerCase().includes(query.toLowerCase()) || coin.symbol.toLowerCase().includes(query.toLowerCase())
    })
    return NextResponse.json(fliteredCoins)
}