import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'

const Ready = () => {
  return (
    <>
        <section id='Ready' className='mt-[112px] bg-gray100 py-[96px] rounded-[8px]'>
            <div className="container">
                <div id="Ready-Row">
                    {/* ---------------Header--------------- */}
                    <div>
                        <h2 className='text-gray900 text-[40px] font-extrabold text-center'>Ready to Get Started? </h2>
                        <p className='text-gray700 font-normal text-center mt-6 text-lg '>Organize your tasks with a 14-day free trial</p>
                    </div>
                    {/* ------------Button---------- */}
                    <div className='flex items-center justify-center mt-[43px]'>
                        <button id='ArrowDownSHadow' className='bg-brand py-[13px] px-[32px] hover:bg-gray200 hover:text-gray800 duration-[.3s] text-white flex items-center gap-2 rounded-[4px] font-manrope text-[14px] font-semibold cursor-pointer'>
                            <span>Ger started</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Ready