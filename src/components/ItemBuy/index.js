import React, { useState } from 'react'
import product from '../../assets/img/product.svg'
import './index.css'
import Modal from '../Modal/Modal';
import iconTunai from '../../assets/icon/iconTunai.svg'
import { Link } from 'react-router-dom';


const dataBuy = [
    {
        name: 'Indomie Goreng Special',
        price: 'Rp3.000,-',
        image: product,
        weight: '85 g',
    },
    {
        name: 'Indomie Goreng Special',
        price: 'Rp3.000,-',
        image: product,
        weight: '85 g',
    },
    {
        name: 'Indomie Goreng Special',
        price: 'Rp3.000,-',
        image: product,
        weight: '85 g',
    },
];

const ItemBuy = () => {
    const [show, setShow] = useState(false);
    let [count, setCount] = useState(1);

    return (
        <div className="mt-20 mb-20 container overflow-x-hidden">
            <div className="modal-body text-abu">
                <div className="flex justify-between">
                    <span className='text-lg font-semibold text-abu'>Pesanan</span>
                </div>
                <div className="flex mt-4 gap-x-6">
                    <div className="bg-abu w-26 rounded-xl py-2 px-6">
                        <img src={product} alt="" className='m-auto w-full h-full object-cover' />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-xs">Indomie Goreng Special</span>
                        <span className="text-xs">85g</span>
                        <div className="flex justify-between mt-3">
                            <span className="font-bold text-sm">Rp6.000,-</span>
                            <span className="font-bold text-sm">2x</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-10">
                    <div className="text-sm font-bold text-abu">
                        Subtotal
                    </div>
                    <div className="text-sm font-bold">
                        Rp 22.000,-
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-sm">
                        Diskon (10%)
                    </div>
                    <div className="text-xs">
                        Rp 2.200,-
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-sm">
                        Kantong plastik
                    </div>
                    <div className="text-xs">
                        Rp 200,-
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-sm">
                        Pajak (2%)
                    </div>
                    <div className="text-xs">
                        Rp 440,-
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-sm font-bold text-abu">
                        Total
                    </div>
                    <div className="text-sm font-bold">
                        Rp 20.640,-
                    </div>
                </div>
                <div className="mt-8">
                    <span className='text-lg font-semibold text-abu'>Metode Bayar</span>
                    <div className="flex justify-between gap-4">
                        <button className="bg-white px-3 py-1 mt-4 rounded-lg bg-white-500 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:drop-shadow-lg ...">
                            <img src={iconTunai} alt="" />
                            <span className="font-bold text-sm">Tunai</span>
                        </button>
                        <button className="bg-white px-3 py-1 mt-4 rounded-lg bg-white-500 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:drop-shadow-lg ...">
                            <img src={iconTunai} alt="" />
                            <span className="font-bold text-sm">Tunai</span>
                        </button>
                        <button className="bg-white px-3 py-1 mt-4 rounded-lg bg-white-500 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:drop-shadow-lg ...">
                            <img src={iconTunai} alt="" />
                            <span className="font-bold text-sm">Tunai</span>
                        </button>
                    </div>
                </div>
                <div className="flex text-center my-6">
                    <Link to='/buy' className="bg-biru rounded-full w-full mt-2 text-white px-8 py-2 text-xs">Bayar</Link>
                </div>
            </div>
        </div >
    )
}

export default ItemBuy