import React, { useState } from 'react'
import logo from '../assets/Swiggy-logo.png'
import { BsCaretDown } from "react-icons/bs";
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";







const Header = () => {
    const [toggle, settoggle] = useState(false);

    const showMenu = () => {
        settoggle(true);
    }

    const hideMenu = () => {
        settoggle(false);
    }

    const Links = [
        {
            icon: <CiSearch />,
            name: "Search"
        },
        {
            icon: <CiDiscount1 />,
            name: "Offers"
        },
        {
            name: "Help"
        },
        {
            icon: <CiUser />,
            name: "Sign In"
        },
        {
            icon: <FaShoppingBag />,
            name: "Cart"
        }
    ]
  return (
    <>
    <div className='fixed inset-0 bg-black/30 z-40 transition-all duration-500' onClick={hideMenu} style={{
        opacity: toggle ? 1:0,
        visibility: toggle ? 'visible':'hidden'
    }}>
        <div onClick={(e) => {
            e.stopPropagation();
        }} className='w-100 bg-white h-full absolute duration-500' style={{
            left: toggle ? '0%' : '-100%'
        }}>

        </div>
    </div>
    {/* Header */}
    <header className='p-8 shadow-xl sticky top-0 z-50 bg-white'>
     <div className='max-w-300 mx-auto flex items-center'>
    {/* Logo */}
        <div className='w-30 '>
       <img src={logo} alt="Logo" className='w-full' />
       </div>
    {/* Location */}
         <div className='text-sm mt-1 text-gray-500'>
         <span className='font-bold border-b-3'>Milan Vihar</span> Burari, Delhi <RxCaretDown onClick={showMenu} fontSize='20px' className='inline-block ml-1  text-[#FF5200]' />
         </div>
    {/* Menu */}
         <nav className='flex list-none gap-10 ml-auto text-sm mt-1 text-gray-500'>
            {
                Links.map(
                (link, index) => {
                    return (
                        <li key={index} className='flex items-center gap-2 cursor-pointer'>
                            {link.icon}
                            {link.name}
                        </li>
                    )
                }
                )
            }
           
         </nav>
     </div>
    </header>
    </>
  )
}

export default Header
