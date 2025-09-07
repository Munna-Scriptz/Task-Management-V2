import React from 'react'
import png1 from '../assets/images/icon1.png'
import png2 from '../assets/images/icon2.png'
import png3 from '../assets/images/icon3.png'
import png4 from '../assets/images/icon4.png'
import png5 from '../assets/images/icon5.png'
import png6 from '../assets/images/icon6.png'
import png7 from '../assets/images/icon1.png'
import png8 from '../assets/images/icon8.png'
import { Link } from 'react-router'

const Migrate = () => {
  return (
    <>
        <section id='Migrate' className='mt-[112px]'>
            <div className="container">
                <div id="Migrate-Row">
                    {/* -----------Header------------ */}
                    <div className='flex items-center flex-col'>
                        <h2 className='text-gray900 lg:text-[40px] text-[28px] font-extrabold text-center' data-aos="fade-up">Integrate Top Work Tools</h2>
                        <p className='text-gray600 lg:text-lg text-sm leading-[160%] text-center lg:w-[856px] w-full mt-6' data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                    </div>
                    {/* -----------Items------------ */}
                    <div className=' mt-[48px] flex items-center justify-between flex-wrap gap-y-6'>
                        <div className='w-[306px] p-6' data-aos="fade-up">
                            <Link to={'/'}><img src={png1} alt="icon" /></Link>
                            <p className='text-gray700 text-base leading-[160%] mt-6'>Lorem magnis pretium sed curabitur nunc facilisi nunc cursus sagittis.</p>
                        </div>
                        <div className='w-[306px] p-6' data-aos="fade-up">
                            <Link to={'/'}><img src={png2} alt="icon" /></Link>
                            <p className='text-gray700 text-base leading-[160%] mt-6'>Lorem magnis pretium sed curabitur nunc facilisi nunc cursus sagittis.</p>
                        </div>
                        <div className='w-[306px] p-6' data-aos="fade-up">
                            <Link to={'/'}><img src={png3} alt="icon" /></Link>
                            <p className='text-gray700 text-base leading-[160%] mt-6'>Lorem magnis pretium sed curabitur nunc facilisi nunc cursus sagittis.</p>
                        </div>
                        <div className='w-[306px] p-6' data-aos="fade-up">
                            <Link to={'/'}><img src={png4} alt="icon" /></Link>
                            <p className='text-gray700 text-base leading-[160%] mt-6'>Lorem magnis pretium sed curabitur nunc facilisi nunc cursus sagittis.</p>
                        </div>
                        <div className='w-[306px] p-6' data-aos="fade-up">
                            <Link to={'/'}><img src={png5} alt="icon" /></Link>
                            <p className='text-gray700 text-base leading-[160%] mt-6'>Lorem magnis pretium sed curabitur nunc facilisi nunc cursus sagittis.</p>
                        </div>
                        <div className='w-[306px] p-6' data-aos="fade-up">
                            <Link to={'/'}><img src={png6} alt="icon" /></Link>
                            <p className='text-gray700 text-base leading-[160%] mt-6'>Lorem magnis pretium sed curabitur nunc facilisi nunc cursus sagittis.</p>
                        </div>
                        <div className='w-[306px] p-6' data-aos="fade-up">
                            <Link to={'/'}><img src={png7} alt="icon" /></Link>
                            <p className='text-gray700 text-base leading-[160%] mt-6'>Lorem magnis pretium sed curabitur nunc facilisi nunc cursus sagittis.</p>
                        </div>
                        <div className='w-[306px] p-6' data-aos="fade-up">
                            <Link to={'/'}><img src={png8} alt="icon" /></Link>
                            <p className='text-gray700 text-base leading-[160%] mt-6'>Lorem magnis pretium sed curabitur nunc facilisi nunc cursus sagittis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Migrate