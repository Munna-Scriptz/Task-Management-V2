import React from 'react'
import Logo from '../assets/images/Logo.svg'
import { Link } from 'react-router'
import { FiUser } from "react-icons/fi";
import { IoLogInOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
        <nav className='bg-transparent lg:block hidden' data-aos="fade-down" data-aos-offset="300" data-aos-easing="linear" data-aos-delay="1000">
            <div className="container">
                <div id="NavBar_Row" className='py-[25px] flex items-center justify-between'>
                    <div className='flex items-center gap-[58px]'>
                        <img src={Logo} alt="Logo" />
                        <ul className='flex items-center gap-[24px] font-manrope font-semibold text-base text-white opacity-[0.85]'>
                            <li><Link id='UnderLineHover' to={'/'}>Features</Link></li>
                            <li><Link id='UnderLineHover' to={'/'}>Overview</Link></li>
                            <li><Link id='UnderLineHover' to={'/'}>Store</Link></li>
                            <li><Link id='UnderLineHover' to={'/'}>Blog</Link></li>
                            <li><Link id='UnderLineHover' to={'/'}>Contact</Link></li>
                        </ul>
                    </div>
                    {/* -----------Nav button--------  */}
                    <div className='flex items-center gap-[32px]'>
                        <div className='flex items-center gap-[16px]'>
                            <p className='font-manrope font-semibold text-white opacity-[0.7]'>Light</p>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer"/>
                                <div className="group peer ring-0 bg-brand  rounded-full outline-none duration-300 after:duration-300 w-[46px] h-[26px]  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-[20px] after:w-[20px] after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-5 peer-hover:after:scale-95">
                                </div>
                            </label>
                            <p className='font-manrope font-semibold text-white opacity-[0.7]'>Dark</p>
                        </div>
                        {/* --------Button-------- */}
                        <div className='flex items-baseline gap-4'>
                            <button className='bg-transparent border-1 border-[#FFFFFF59] py-[9px] hover:bg-brand hover:text-white duration-[.3s] px-[20px] text-white flex items-center gap-2 rounded-[4px] font-manrope text-[14px] font-semibold cursor-pointer'>
                                <IoLogInOutline className='text-lg'/>
                                <span>Login</span>
                            </button>
                            <button className='bg-brand py-[9px] px-[20px] hover:bg-gray200 hover:text-gray800 duration-[.3s] text-white flex items-center gap-2 rounded-[4px] font-manrope text-[14px] font-semibold cursor-pointer'>
                                <FiUser className='text-lg'/>
                                <span>Sign</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar