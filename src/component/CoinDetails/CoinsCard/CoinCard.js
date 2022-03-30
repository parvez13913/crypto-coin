import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = (props) => {
    console.log(props);
    const {image,name,symbol,id} = props.coin;
    return (
        <div className='shadow-lg bg-white rounded-2xl p-4 w-[250px]'>
            <Link to = {`/coinDetails/${id}`}>
                <div className='flex gap-4 justify-between item-center'>
                    <div className='flex-shrink-0'>
                        <img className='mx-auto object-cover rounded-full h-16 w-16' src={image} alt="coinImages"/>
                   </div>                    
                    <div className='flex flex-col justify-end'>
                       <span className='text-gray-600 font-medium'>{name}</span> 
                       <span className='text-gray-400 text-sx'>{symbol}</span>                        
                   </div>                    
                </div>           
            </Link>
        </div>
    );
};

export default CoinCard;