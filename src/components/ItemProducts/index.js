import React, { useState } from 'react'
import product from '../../assets/img/product.svg'
import './index.css'
import Modal from "../Modal/Modal";
import NavbarMobile from '../Navbar/NavbarMobile';
import NavbarTab from '../Navbar/NavbarTab';
import 'remixicon/fonts/remixicon.css'
import logo from '../../assets/img/logo.svg'
import blank from '../../assets/img/blank.svg'
import mie from '../../assets/img/mie.svg'
import minuman from '../../assets/img/minuman.svg'
import hewani from '../../assets/img/hewani.svg'
import sayuran from '../../assets/img/sayuran.svg'
import m_pokok from '../../assets/img/m_pokok.svg'
import iconTunai from '../../assets/icon/iconTunai.svg'
import debit from '../../assets/icon/debit.svg'
import wallet from '../../assets/icon/wallet.svg'
import { Link } from 'react-router-dom';

const dataProducts = [
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
    }];

const ItemProducts = () => {
    const [show, setShow] = useState(false);
    let [count, setCount] = useState(1);

    function decrementCount() {
        count = Math.max(0, count - 1);
        setCount(count);
    }
    function incrementCount() {
        count = count + 1;
        setCount(count);
    };

    return (
        <div className="mt-32 mb-20 container">
            {/* Mobile */}
            <div className="sm:hidden">
                <NavbarMobile />
                <div className="flex justify-between">
                    <div className="left">
                        <span className='text-sm font-semibold'>Produk</span>
                    </div>
                    <div className="right">
                        <span className='text-xs font-semibold'>37 Produk</span>
                    </div>
                </div>
                <div className='itemProducts mt-4 container mx-auto grid place-content-center gap-x-4 gap-y-6'>
                    {dataProducts.map((item) => (
                        <label className='card-product'>
                            <input type="radio" name="radio" class="radio-custom" />
                            <div class="bg-white px-2 pt-2 pb-4 m-auto text-center radio-btn">
                                <div className="bg-abu w-26 mx-auto rounded-xl p-abu">
                                    <img src={item.image} alt="" className='m-auto w-full h-full object-cover' />
                                </div>
                                <p className='font-semibold text-xs-custom mt-2 text-center'>{item.name}</p>
                                <div className="hideText mb-4">
                                    <span className="text-center mx-auto mt-2">{item.weight}</span>
                                    <span className="text-center mx-auto font-bold text-sm-custom mt-4">{item.price}</span>
                                    <span className="text-center mx-auto font-bold text-sm-custom mt-4">Item</span>
                                </div>
                                <div className="hideElement mt-4 flex">
                                    <button className="bg-abu px-2 py-1" onClick={decrementCount}>-</button>
                                    <span className="text-center mx-auto font-bold text-sm-custom">{count}</span>
                                    <button className="bg-abu px-2 py-1" onClick={incrementCount}>+</button>
                                </div>
                                <button onClick={() => setShow(true)} className="bg-biru rounded-full w-full mt-8 text-white px-2 py-2 text-xs-custom hideButton">Konfirmasi</button>
                                <Modal onClose={() => setShow(false)} show={show}>
                                    <p>This is modal body</p>
                                </Modal>
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            {/* Tablet */}
            <div className="text-black hidden sm:flex">
                <div className="flex justify-between">
                    <NavbarTab />
                    <div className="fixed top-0 h-full overflow-y-scroll overflow-x-hidden container mt-7 pl-14 sm:pl-20 pr-48 sm:pr-56">
                        <div className="flex items-center gap-x-6 justify-between mb-4">
                            <span className="font-bold text-xs">Pilih Kategori</span>
                            <div className="relative">
                                <span className="absolute top-3 right-6"><ion-icon name="search"></ion-icon></span>
                                <span><input type="text" className='bg-white w-full py-2 px-2 -ml-3 text-black rounded-lg' placeholder='Cari kategori atau produk' /></span>
                            </div>
                        </div>
                        <div className="mb-28">
                            <div className="flex items-center justify-between gap-x-1">
                                <div className="bg-white w-auto h-4 rounded-lg flex items-center px-1">
                                    <img src={mie} alt="" className='w-2' />
                                    <span className="font-bold fz-9">Mie</span>
                                </div>
                                <div className="bg-white w-auto h-4 rounded-lg flex items-center px-1">
                                    <img src={minuman} alt="" className='w-2' />
                                    <span className="font-bold fz-9">Minuman</span>
                                </div>
                                <div className="bg-white w-auto h-4 rounded-lg flex items-center px-1">
                                    <img src={sayuran} alt="" className='w-2' />
                                    <span className="font-bold fz-9">Hewani</span>
                                </div>
                                <div className="bg-white w-auto h-4 rounded-lg flex items-center px-1">
                                    <img src={hewani} alt="" className='w-2' />
                                    <span className="font-bold fz-9">Sayuran</span>
                                </div>
                                <div className="bg-white w-auto h-4 rounded-lg flex items-center px-1">
                                    <img src={m_pokok} alt="" className='w-2' />
                                    <span className="font-bold fz-9">Makanan Pokok</span>
                                </div>
                                <div className=""><i class="ri-arrow-right-s-line"></i></div>
                            </div>

                            <div className="flex justify-between mt-6">
                                <div className="left">
                                    <span className='text-xs font-semibold'>Produk</span>
                                </div>
                                <div className="right">
                                    <span className='text-xs-custom font-semibold'>37 Produk</span>
                                </div>
                            </div>
                            <div className='itemProducts mt-4 mx-auto grid place-content-center gap-x-4 gap-y-6'>
                                {dataProducts.map((item) => (
                                    <label className='card-product'>
                                        <input type="radio" name="radio" class="radio-custom" />
                                        <div class="bg-white px-1 py-1 m-auto text-center radio-btn">
                                            <div className="bg-abu w-26 mx-auto rounded-xl p-abu">
                                                <img src={item.image} alt="" className='m-auto w-full h-full object-cover' />
                                            </div>
                                            <p className='font-bold fz-7 mt-2 text-center'>{item.name}</p>
                                            <div className="flex justify-between mt-2 pb-2">
                                                <span className="text-center fz-7 mx-auto">{item.weight}</span>
                                                <span className="text-center mx-auto font-bold fz-7">{item.price}</span>
                                            </div>
                                            <div className="flex justify-between custom-flex">
                                                <div className="hideText mb-4">
                                                    <span className="text-center mx-auto font-bold fz-10 mt-4">Item</span>
                                                </div>
                                                <div className="hideElement mt-4 flex">
                                                    <button className="bg-abu px-1 flex items-center justify-center h-3 mr-2" onClick={decrementCount}>-</button>
                                                    <span className="text-center mx-auto font-bold fz-10">{count}</span>
                                                    <button className="bg-abu px-1 flex items-center justify-center h-3 ml-2" onClick={incrementCount}>+</button>
                                                </div>
                                            </div>
                                            <button className="bg-biru rounded-full w-full my-1 text-white px-2 py-1 fz-9 hideButton">Konfirmasi</button>
                                            <Modal onClose={() => setShow(false)} show={show}>
                                                <p>This is modal body</p>
                                            </Modal>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div >
                    </div>
                    <div className='shadow-md h-full fixed top-0 right-0 overflow-y-scroll overflow-x-hidden bg-white'>
                        {/* <div className='w-44 flex flex-col gap-y-10 justify-center items-center bg-white h-full'>
                            <img src={logo} alt="" />
                            <img src={blank} alt="" className='w-3/6' />
                            <h5 className="font-bold text-sm">Tidak ada tagihan</h5>
                        </div> */}
                        <div className="w-44 h-full mt-9 p-2">
                            <div className="flex items-center justify-end gap-x-1 mb-3 mr-1">
                                <span className="fz-9 font-bold">ID-3242523841</span>
                                <i class="ri-close-circle-line"></i>
                            </div>
                            <span className='text-xs font-semibold text-abu'>Tagihan</span>
                            <div className="grid grid-cols-6 fz-8 mt-4">
                                <div className="col-span-1 font-semibold">2x</div>
                                <div className="col-span-3 flex flex-col">
                                    <div className="font-semibold">Indomie Goreng Special</div>
                                    <div className="">85 g</div>
                                </div>
                                <div className="col-span-2 font-semibold">Rp6.000,-</div>
                            </div>
                            <div className="grid grid-cols-6 fz-8 mt-4">
                                <div className="col-span-1 font-semibold">1x</div>
                                <div className="col-span-3 flex flex-col">
                                    <div className="font-semibold">Sprite</div>
                                    <div className="">150 ml</div>
                                </div>
                                <div className="col-span-2 font-semibold">Rp7.000,-</div>
                            </div>
                            <div className="grid grid-cols-6 fz-8 mt-4">
                                <div className="col-span-1 font-semibold">1x</div>
                                <div className="col-span-3 flex flex-col">
                                    <div className="font-semibold">Milku</div>
                                    <div className="">150 ml</div>
                                </div>
                                <div className="col-span-2 font-semibold">Rp3.000,-</div>
                            </div>
                            <div className="grid grid-cols-6 fz-8 mt-4">
                                <div className="col-span-1 font-semibold">1x</div>
                                <div className="col-span-3 flex flex-col">
                                    <div className="font-semibold">Chitato</div>
                                    <div className="">100 mg</div>
                                </div>
                                <div className="col-span-2 font-semibold">Rp6.000,-</div>
                            </div>
                            <div className="border-b border-black-100 my-3"></div>
                            <div className="grid grid-cols-6 my-2">
                                <span className="col-span-4 font-semibold text-xs text-black">Subtotal</span>
                                <span className="col-span-2 font-semibold fz-8">Rp22.000,-</span>
                            </div>
                            <div className="grid grid-cols-6 my-2">
                                <span className="col-span-4 font-semibold fz-8 text-abu">Diskon(10%)</span>
                                <span className="col-span-2 font-semibold fz-8 text-abu">Rp2.200,-</span>
                            </div>
                            <div className="grid grid-cols-6 my-2">
                                <span className="col-span-4 font-semibold fz-8 text-abu">Kantong plastik</span>
                                <span className="col-span-2 font-semibold fz-8 text-abu">Rp200,-</span>
                            </div>
                            <div className="grid grid-cols-6 my-2">
                                <span className="col-span-4 font-semibold fz-8 text-abu">Pajak(2%)</span>
                                <span className="col-span-2 font-semibold fz-8 text-abu">Rp440,-</span>
                            </div>
                            <div className="grid grid-cols-6 mt-2 mb-6">
                                <span className="col-span-4 font-semibold text-xs text-black">Total</span>
                                <span className="col-span-2 font-semibold fz-8">Rp20.640,-</span>
                            </div>
                            <span className="text-abu text-xs">Metode bayar</span>
                            <div className="flex justify-center items-center gap-4">
                                <button className="p-1 flex flex-col items-center bg-white mt-4 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:drop-shadow-lg ">
                                    <img src={iconTunai} alt="" className='w-5' />
                                    <span className="fz-8 font-bold">Tunai</span>
                                </button>
                                <button className="p-1 flex flex-col items-center bg-white mt-4 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:drop-shadow-lg ">
                                    <img src={debit} alt="" className='w-5' />
                                    <span className="fz-8 font-bold">Debit</span>
                                </button>
                                <button className="p-1 flex flex-col items-center bg-white mt-4 hover:bg-white-600 active:bg-white-700 focus:outline-none focus:drop-shadow-lg ">
                                    <img src={wallet} alt="" className='w-5' />
                                    <span className="fz-8 font-bold">E-Wallet</span>
                                </button>
                            </div>
                            <div className="flex text-center my-6">
                                <Link className="bg-biru rounded-full w-full mt-2 text-white px-8 py-1 text-xs">Bayar</Link>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default ItemProducts