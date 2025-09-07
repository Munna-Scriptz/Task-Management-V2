import React from 'react'
import FloatingImage from '../assets/images/BannerFloating.svg'
const Banner = () => {
  return (
    <>
        <section id='Banner' className='lg:after:h-[950px] after:h-[750px]'>
            <div className="container">
                <div id="Banner-Row" className='flex flex-col items-center lg:pt-[128px] pt-[100px]'>
                    <h1 className='text-white lg:text-[56px] text-[34px] font-extrabold lg:w-[856px] w-full text-center'>Task Management Assistant You Gonna Love</h1>
                    <p className='text-white lg:text-lg text-base font-normal opacity-[0.7] lg:w-[856px] w-full text-center mt-8 mb-[48px]'>We offer you a new generation of task and project management system. Plan, manage and track all your tasks in one flexible software!</p>
                    <button id='ArrowDownSHadow' className='bg-brand py-[13px] px-[32px] hover:bg-gray200 hover:text-gray800 duration-[.3s] text-white flex items-center gap-2 rounded-[4px] font-manrope text-[14px] font-semibold cursor-pointer'>
                        <span>Get early access</span>
                    </button>
                    <div className='mt-[96px] select-none'>
                        <img src={FloatingImage} alt="Menu Image" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner