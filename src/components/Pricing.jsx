import React from 'react'

const Pricing = () => {
  return (
    <>
        <section id='Pricing' className='mt-[112px]'>
            <div className="container">
                <div id="Pricing-Row">
                    {/* ------------Header-------------- */}
                    <div><h2 className='text-gray900 text-[40px] font-extrabold text-center'>Transparent Pricing for You</h2></div>
                    <div className='flex items-center justify-center mt-6'>
                        <p className='text-gray600 text-lg font-normal w-[636px] text-center'>Varius sed maecenas massa dictum viverra in. Viverra vel in elit, vivamus dui interdum. Nulla congue lobortis amet amet eleifend.</p>
                    </div>
                    {/* ------------Pricing Card-------------- */}
                    <div className='flex items-center justify-center mt-10'>
                        {/* -------------First Card------------- */}
                        <div className='w-[464px] rounded-[8px] h-[497px] bg-brand flex items-center justify-center shadow-lg shadow-[#6366F159]'>
                            <div className='bg-brand py-[72px] w-[416px] h-[449px] px-6 border-1 border-[#ffffff2c] rounded-[8px] flex items-center flex-col duration-[.3s] hover:shadow-lg shadow-[#6366F159]'>
                                <h2 className='text-white text-[28px] font-extrabold text-center'>Team</h2>
                                <p className='text-white text-lg text-center opacity-[0.7] mt2'>Best for small teams</p>
                                <h2 className='text-white text-[48px] font-extrabold text-center mt-10'>$10</h2>
                                <p className='text-white text-lg text-center opacity-[0.5] mt2'>per month</p>
                                <div className='flex items-center justify-center'>
                                    <button className='py-[13px] cursor-pointer duration-[.3s] px-[32px] bg-white font-semibold mt-12 text-gray800 rounded-[6px]'>Get started now</button>
                                </div>
                            </div>
                        </div>
                        {/* -------------Second Card------------- */}
                        <div className='bg-transparent py-[72px] w-[416px] h-[449px] px-6 border-1 border-gray300 rounded-[8px] flex items-center flex-col duration-[.3s] hover:shadow-lg shadow-[#6366F159]'>
                            <h2 className='text-gray900 text-[28px] font-extrabold text-center'>Company</h2>
                            <p className='text-gray700 text-lg text-center mt2'>Best for small teams</p>
                            <h2 className='text-gray900 text-[48px] font-extrabold text-center mt-10'>$15</h2>
                            <p className='text-gray600 text-lg text-center mt2'>per month</p>
                            <div className='flex items-center justify-center'>
                                <button className='py-[13px] cursor-pointer hover:bg-brand hover:text-white duration-[.3s] px-[32px] border-1 border-[#6366F159] bg-white font-semibold mt-12 text-brand rounded-[6px]'>Get started now</button>
                            </div>
                        </div>
                        {/* -------------Second Card------------- */}
                        <div className='bg-transparent py-[72px] w-[416px] h-[449px] px-6 border-1 border-gray300 rounded-[8px] flex items-center flex-col duration-[.3s] hover:shadow-lg shadow-[#6366F159]'>
                            <h2 className='text-gray900 text-[28px] font-extrabold text-center'>Enterprise</h2>
                            <p className='text-gray700 text-lg text-center mt2'>Best for large teams</p>
                            <h2 className='text-gray900 text-[48px] font-extrabold text-center mt-10'>$20</h2>
                            <p className='text-gray600 text-lg text-center mt2'>per month</p>
                            <div className='flex items-center justify-center'>
                                <button className='py-[13px] px-[32px] border-1 cursor-pointer hover:bg-brand hover:text-white duration-[.3s] border-[#6366F159] bg-white font-semibold mt-12 text-brand rounded-[6px]'>Get started now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Pricing