import React, { useState } from 'react'
import Button from '../Button';
import logo from '../../assets/img/logo.svg'
import menu1 from '../../assets/icon/menu1.svg'
import menu2 from '../../assets/icon/menu2.svg'
import menu3 from '../../assets/icon/menu3.svg'
import menu4 from '../../assets/icon/menu4.svg'
import menu5 from '../../assets/icon/menu5.svg'
import { Link } from 'react-router-dom';

const NavbarTab = () => {
    const Links = [
        { icon: <i class="ri-home-line"></i>, link: "/products", className: 'text-md my-7' },
        { icon: <i class="ri-history-line"></i>, link: "/products", className: 'text-md my-7' },
        { icon: <i class="ri-draft-line"></i>, link: "/products", className: 'text-md my-7' },
        { icon: <i class="ri-settings-2-line"></i>, link: "/products", className: 'text-md my-7' },
        { icon: <i class="ri-logout-circle-line"></i>, link: "/products", className: 'mt-32 text-md my-7' },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md h-full fixed top-0 left-0'>
            <div className='flex flex-col items-center bg-white h-full py-4 px-2 hover:overflow-y-scroll hover:overflow-x-hidden'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-4'>
                        <img src={logo} alt="" />
                    </span>
                </div>

                <ul className='mt-10'>
                    {
                        Links.map((link) => (
                            <li className={link.className}>
                                <Link to={link.link} className='w-8 h-8 rounded-full flex justify-center items-center m-auto p-auto bg-transparent hover:bg-blue-600 focus:bg-blue-600 hover:text-white focus:text-white  focus:outline-none'>{link.icon}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavbarTab