import React from 'react';

const Contact = () => {
    return (
        <div className='md:mt-16'>
            <div>
                <h1 className='font-bold text-4xl mt-6'>Contact Us, Our Office Address Down Below</h1>
            </div>
            <div className='mt-4'>
                <button className='text-white bg-cyan-600 px-3 py-2 rounded-md m-2'>BD Address</button>
                <button className='text-white bg-cyan-600 px-3 py-2 rounded-md'>US Address</button>
            </div>
        </div>
    );
};

export default Contact;