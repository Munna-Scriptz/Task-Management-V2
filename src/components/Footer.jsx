import React from 'react'
import Logo from '../assets/images/Logo.svg'
import { Link } from 'react-router'
import Apple from '../assets/images/AppleIcon.png'
import Play from '../assets/images/PlaystoreIcon.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <footer className='bg-gray900 pb-[48px] pt-[64px]'>
                    <div className="container">
                        <div id="Footer-Row" className='flex flex-col items-center'>
                            {/* -------Footer Logo------- */}
                            <Link to={'/'} data-aos="fade-up"><img src={Logo} alt="Logo" /></Link>
                            {/* -------Footer Links------- */}
                            <ul className='flex lg:flex-row flex-col items-center lg:gap-[56px] gap-3 mt-[48px]'>
                                <li className='text-white opacity-[0.85] text-base'><Link id='UnderLineHover' to={'/'} data-aos="fade-up">Home</Link></li>
                                <li className='text-white opacity-[0.85] text-base'><Link id='UnderLineHover' to={'/'} data-aos="fade-up">Features</Link></li>
                                <li className='text-white opacity-[0.85] text-base'><Link id='UnderLineHover' to={'/'} data-aos="fade-up">Overview</Link></li>
                                <li className='text-white opacity-[0.85] text-base'><Link id='UnderLineHover' to={'/'} data-aos="fade-up">Blog</Link></li>
                                <li className='text-white opacity-[0.85] text-base'><Link id='UnderLineHover' to={'/'} data-aos="fade-up">Contact</Link></li> 
                                <li className='text-white opacity-[0.85] text-base'><Link id='UnderLineHover' to={'/'} data-aos="fade-up">Account</Link></li> 
                            </ul>
                            {/* -------Footer Button------- */}
                            <div className='lg:mt-[64px] mt-[32px] flex lg:flex-row flex-col items-center gap-[24px]'>
                                    <a href='#' className='bg-white flex items-center gap-[11px] py-[10px] px-[22px] w-fit rounded-[8px]' data-aos="fade-up">
                                        <img src={Apple} alt="icon" />
                                        <div>
                                            <p className='text-gray800 lg:text-sm text-xs leading-[15px]'>Download on the</p>
                                            <h2 className='lg:text-[20px] text-base text-gray800 font-semibold lg:leading-[26px]'>Apple Store</h2>
                                        </div>
                                    </a>
                                    <a href='#' className='bg-white flex items-center gap-[11px] py-[10px] px-[22px] w-fit rounded-[8px]' data-aos="fade-up">
                                        <img src={Play} alt="icon" />
                                        <div>
                                            <p className='text-gray800 lg:text-sm text-xs leading-[15px]'>GET IT ON</p>
                                            <h2 className='lg:text-[20px] text-base text-gray800 font-semibold lg:leading-[26px]'>Google Play</h2>
                                        </div>
                                    </a>
                            </div>
                            {/* -------Footer Social Links------- */}
                            <div className='lg:mt-[56px] mt-[32px] flex items-center gap-[16px]' data-aos="fade-up">
                                <Link to={'/'} className='text-white text-[18px] w-[44px] h-[44px] bg-[#FFFFFF0D] rounded-[6px] flex items-center justify-center duration-[.3s] hover:bg-brand hover:text-gray300 '>
                                    <FaFacebookSquare />
                                </Link>
                                <Link to={'/'} className='text-white text-[18px] w-[44px] h-[44px] bg-[#FFFFFF0D] rounded-[6px] flex items-center justify-center duration-[.3s] hover:bg-brand hover:text-gray300 '>
                                    <FaTwitter />
                                </Link>
                                <Link to={'/'} className='text-white text-[18px] w-[44px] h-[44px] bg-[#FFFFFF0D] rounded-[6px] flex items-center justify-center duration-[.3s] hover:bg-brand hover:text-gray300 '>
                                    <PiInstagramLogoFill />
                                </Link>
                                <Link to={'/'} className='text-white text-[18px] w-[44px] h-[44px] bg-[#FFFFFF0D] rounded-[6px] flex items-center justify-center duration-[.3s] hover:bg-brand hover:text-gray300 '>
                                    <FaYoutube />
                                </Link>
                            </div>
                            {/* -------Footer Copyright------- */}
                            <p className='text-gray600 text-[14px] text-center mt-[72px] lg:w-[856px] w-full'>2021. All rights reserved. Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.</p>
                        </div>
                    </div>
                </footer>
    </>
  )
}

export default Footer