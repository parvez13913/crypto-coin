import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='md:mt-16'>
            <div>
                <h1 className='font-bold text-4xl mt-6'>Contact Us, Our Office Address Down Below</h1>
            </div>
            <div className='mt-4'>
                <Link to= 'bd-address' className='text-white bg-cyan-600 px-3 py-2 rounded-md m-2'>BD Address</Link>
                <Link to= 'us-address' className='text-white bg-cyan-600 px-3 py-2 rounded-md'>US Address</Link>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Contact;