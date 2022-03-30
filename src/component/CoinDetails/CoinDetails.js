import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const {id} = useParams();
    const [coin,setCoin] = useState({});
    console.log(coin);
    const {name,market_cap_rank,country_origin,last_updated,hashing_algorithm,genesis_date,categories,community_score,developer_score,liquidity_score,public_interest_score} = coin
    useEffect(() => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}`;
        fetch(url).then(res => res.json()).then(data => setCoin(data));
    },[id]);
    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='grid grid-col-1 md:grid-cols-2 justify-items-center gap-4 md: content-center'>
                <div className='order-2 md:order-1'>
                    <h1 className='text-3xl font-semiBold'>General Info:</h1>
                    <hr />
                    <p>Coin Name: {name}</p>
                    <p>Market Cap Rank: {market_cap_rank}</p>
                    <p>Origin: {country_origin? country_origin : "NoT Found"}</p>
                    <p>Contract Address: {categories? categories : "Not Found"}</p>
                    <p>Hashing Algorithm: {hashing_algorithm? hashing_algorithm:"Not Found"}</p>
                    <p>Genesis Date: {genesis_date? genesis_date:"Not Found"}</p>
                    <p className='mb-5'>Last Updated: {last_updated? last_updated: "Not Found"}</p>

                    <h1 className='text-3xl font-semiBold'> Scores:</h1>
                    <hr />
                    <p>Community Score: {community_score? community_score:"Not Found"}</p>
                    <p>Developer Score: {developer_score? developer_score: "Not Found"}</p>
                    <p>Liquidity Score: {liquidity_score?liquidity_score:"Not Found"}</p>
                    <p>Public Interest Score: {public_interest_score? public_interest_score : "Not Found"}</p>
                </div>
                <div className='order-1 md:order-2'>
                    <img src={coin.image?.large} alt="CoinImages" />
                </div>
            </div>
        </div>
    );
};

export default CoinDetails;