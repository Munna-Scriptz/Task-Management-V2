import React from 'react'
import DownloadImage from '../assets/images/DownlodAppImg.svg'
import { FaStar } from "react-icons/fa";
import apple from '../assets/images/whiteApple.png'
import play from '../assets/images/PlaystoreIcon.png'

const Download = () => {
  return (
    <>
        <section id='Download' className='mt-[212px]'>
            <div className="container">
                <div id="Download-Row" className='flex lg:flex-row flex-col items-center justify-between'>
                    {/* -------------Left Side------------ */}
                    <div>
                        <img src={DownloadImage} alt="Image" />
                    </div>
                    {/* -------------Right Side------------ */}
                    <div>
                        <h2 className='text-gray900 lg:text-[40px] text-[28px] font-extrabold lg:w-[416px] mb-12 lg:mt-0 mt-10'>Download Our App for Any Devices:</h2>
                        <div>
                            <p className='text-gray600 text-base'>App Store</p>
                            <div className='text-[#FFBA08] text-sm flex items-center gap-[2px] mt-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-4 flex lg:flex-row flex-col lg:items-center justify-between'>
                                <div>
                                    <h2 className='text-gray900 text-2xl font-extrabold'>Editor's Choice</h2>
                                    <p className='text-gray700 text-base mt1'>rating 4.7, 187K+ reviews</p>
                                </div>
                                <a href='#' className='bg-gray900 px-[22px] py-[11px] rounded-[8px] flex items-center gap-[11px] w-fit lg:mt-0 mt-5'>
                                    <img src={apple} alt="icon" />
                                    <div>
                                        <p className='text-white text-sm'>Download on the</p>
                                        <h2 className='text-white font-semibold lg:text-2xl text-xl leading-[80%]'>App Store</h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <p className='text-gray600 text-base'>App Store</p>
                            <div className='text-[#FFBA08] text-sm flex items-center gap-[2px] mt-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-4 flex lg:flex-row flex-col lg:items-center justify-between'>
                                <div>
                                    <h2 className='text-gray900 text-2xl font-extrabold'>App of the Day</h2>
                                    <p className='text-gray700 text-base mt1'>rating 4.8, 30K+ reviews</p>
                                </div>
                                <div className='bg-gray900 px-[22px] py-[11px] rounded-[8px] flex items-center gap-[11px] w-fit lg:mt-0 mt-5'>
                                    <img src={play} alt="icon" />
                                    <div>
                                        <p className='text-white text-sm'>GET IT ON</p>
                                        <h2 className='text-white font-semibold lg:text-2xl text-xl leading-[80%]'>Google Play</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Download