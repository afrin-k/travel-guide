"use client";
import { useState } from 'react'
import Link from 'next/link'
import { IoCloseOutline, IoMenu } from 'react-icons/io5'
import Image from 'next/image';
import logo from '@/public/logo.svg';

const navLinks = [
    {
        title:"HOME",
        index: 1,
    },
    {
        title:"SERVICES",
        index: 2,
    },
    {
        title:"CONTACT",
        index: 3,
    },
    {
        title:"OFFERS",
        index: 4,
    },
    {
        title:"HOTELS",
        index: 5,
    },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(true)
    return (
        <div className='fixed z-30 w-full'>
            <div className='z-10 flex text-black bg-clip-padding shadow-md sm:px-12 px-3 sm:py-2 py-3 align-center sm:justify-between justify-end absolute top-0 w-full backdrop-blur bg-white'>
                <Image src={logo} alt="logo" height={40} width={150} className='align-center justify-center hidden md:block '/>
                <div className='flex items-center max-sm:hidden'>
                {navLinks.map((nav) => (
                    <Link key={nav.index} className='navbar-text' href="/">{nav.title}</Link>
                ))}
                </div>
                <IoMenu onClick={() => setMenuOpen(!menuOpen)} size={30} className='sm:hidden' />
            </div>
            <div className={`fixed z-20 w-full overflow-hidden bg-slate-700 ${menuOpen ? 'h-0' : 'h-screen'} transition-all duration-500 ease-in-out bg-opacity-20 backdrop-blur-lg`}>
                <div className='p-3 justify-end flex'>
                    <IoCloseOutline onClick={() => setMenuOpen(!menuOpen)} size={30} className='text-white font-semibold' />
                </div>
                <div className='h-full w-full flex justify-center items-center'>
                    <div className='text-black flex flex-col text-center -mt-20'>
                        {navLinks.map((nav) => (
                            <Link key={nav.index} className='py-2 font-semibold' href="/" onClick={() => setMenuOpen(!menuOpen)}>{nav.title}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar