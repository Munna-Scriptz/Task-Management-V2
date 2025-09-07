import React, { useState } from 'react'
import Logo from '../assets/images/Logo.svg'
import { Link } from 'react-router'
import { FaBarsStaggered } from 'react-icons/fa6';
import { MdNightlightRound, MdOutlineLightMode } from 'react-icons/md';
import { IoHomeOutline } from 'react-icons/io5';
import { LuShoppingBag } from 'react-icons/lu';
import { MdOutlineGroup } from 'react-icons/md';
import { RiUserLine } from 'react-icons/ri';
import { TbArrowsJoin } from 'react-icons/tb';
const ResNavbar = () => {
  const [Value , SetValue] = useState(true)
  const [theme , setTheme] = useState(true)
  return (
    <>
    <nav className='lg:hidden block z-50'>
        <div className="container">
            <div id="NavBar_Row" className='py-[20px] flex items-center justify-between' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className='w-[110px]'>
                    <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
                </div>
                {/* -----------Nav button--------  */}
                <div className='flex items-center gap-5 text-2xl text-white'>
                    {
                        theme?
                        <MdNightlightRound onClick={()=>setTheme(!theme)} className='cursor-pointer'/>
                        :
                        <MdOutlineLightMode onClick={()=>setTheme(!theme)} className='cursor-pointer'/>
                    }
                    <FaBarsStaggered onClick={()=>SetValue(!Value)} className='cursor-pointer'/>
                </div>
            </div>
        </div>
        {/* ------Button Menu------ */}
        <div className={`absolute top-0 left-0 w-full h-screen duration-[.3s]  ${Value? 'z-[-10]' : 'z-[40]'}`}>
            <div onClick={()=>SetValue(!Value)} className={`w-full h-screen duration-[.3s] absolute top-0 left-0 bg-[#00000070] ${Value? 'hidden' : 'visible'}`}></div>
            <div className={`h-screen w-[60%] absolute top-0 bg-[#131022] p-5 duration-[.8s] shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden z-50 ${Value? ' translate-x-[-520px] md:translate-x-[-740px] ' : ' translate-x-[-0px]'}`}>
                <div className='flex items-center justify-between absolute top-0 right-0 w-full p-5'>
                    <Link to={'/'} className='w-[80px]'><img src={Logo} alt="Logo" /></Link>
                    <button className='relative w-[32px] h-[28px] cursor-pointer right-0' onClick={()=>SetValue(!Value)}>
                        <span className={`w-[20px] h-[2px] bg-[#F8F8F8] absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[5px]' : 'rotate-[45deg] top-[7px]'}`} ></span>
                        <span className={`w-[20px] h-[2px] bg-[#F8F8F8] absolute top-[10px] right-[10px] duration-[.3s] ${Value? 'opacity-100' : 'opacity-0'}`}></span>
                        <span className={`w-[20px] h-[2px] bg-[#F8F8F8] absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[15px]' : 'rotate-[-45deg] top-[7px]' }`}></span>
                    </button>
                </div>

                <ul className='flex flex-col items-start gap-5 text-xl mt-25'>
                    <li><Link onClick={()=>SetValue(!Value)} className='text-[#F8F8F8] font-manrope font-medium flex items-center gap-2' to={'/'}><IoHomeOutline/> Home</Link></li>
                    <span className='w-full h-[1px] bg-gray-400'></span>
                    <li><Link onClick={()=>SetValue(!Value)} className='text-[#F8F8F8] font-manrope font-medium flex items-center gap-2' to={'/shop'}><LuShoppingBag/> Shop</Link></li>
                    <span className='w-full h-[1px] bg-gray-400'></span>
                    <li><Link onClick={()=>SetValue(!Value)} className='text-[#F8F8F8] font-manrope font-medium flex items-center gap-2' to={'/about'}><MdOutlineGroup/> About</Link></li>
                    <span className='w-full h-[1px] bg-gray-400'></span>
                    <li><Link onClick={()=>SetValue(!Value)} className='text-[#F8F8F8] font-manrope font-medium flex items-center gap-2' to={'/Login'}><RiUserLine/> Login</Link></li>
                    <span className='w-full h-[1px] bg-gray-400'></span>
                    <li><Link onClick={()=>SetValue(!Value)} className='text-[#F8F8F8] font-manrope font-medium flex items-center gap-2' to={'/Register'}><TbArrowsJoin/> Register</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default ResNavbar