import React from 'react';

const HomePage = () => {
    return (
        <div>
            <div className='flex justify-center align-middle'>
                 <h1 className='text-4xl font-bold font-mono mt-18 md:mt-40 md:text-5xl'>Welcome To CRYPTO Coin <span>☕</span></h1>
                 
            </div>
            <div className='mt-7'>
                <button className='px-2 py-3 bg-cyan-600 rounded-full text-white'>Explore Coin</button>
            </div>
        </div>
    );
};

export default HomePage;