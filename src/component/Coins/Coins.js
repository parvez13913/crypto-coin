import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinDetails/CoinsCard/CoinCard';


const Coins = () => {
    const [coins,setCoins] = useState([]);
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res => res.json())
        .then(data => setCoins(data));
    },[]);
    return (
        <div className='px-4 pb-20 pt-24 mx-auto max-w-7xl md:px-2'>
            <p className='text-center text-color-gray-900 font-bold text-4xl'>Available Crypto Currencies</p>
            <p className='mt-3'>Total coins:{coins.length}</p>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center mt-5'>
            {
                coins.map(coin => <CoinCard 
                    coin={coin}
                    key={coin.id}/>)
            }
            </div>
        </div>
    );
};

export default Coins;