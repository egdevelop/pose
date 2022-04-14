import React from 'react'
import { Link } from 'react-router-dom'
import logoHome from '../assets/img/logoHome.svg'

function Home() {
    return (
        <div className='container mt-40 mx-auto flex justify-center items-center gap-y-6 flex-col text-center'>
            <img src={logoHome} alt="" className='w-1/6' />
            <h1 className='font-bold'>Selamat datang</h1>
            <Link to="/products" className="bg-biru px-20 py-2 w-full sm:w-auto rounded-full text-white">Lanjutkan</Link>
        </div>
    )
}

export default Home;
