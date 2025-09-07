import React from 'react'
import icon1 from '../assets/images/OgIcon1.svg'
import icon2 from '../assets/images/OgIcon2.svg'
import icon3 from '../assets/images/OgIcon3.svg'
import icon4 from '../assets/images/OgIcon4.svg'
import icon5 from '../assets/images/OgIcon5.svg'
import icon6 from '../assets/images/OgIcon6.svg'
import icon7 from '../assets/images/OgIcon7.svg'
import icon8 from '../assets/images/OgIcon8.svg'

const Organized = () => {
    const MyOrganized = [
        {
            icon: icon1,
            upperText: 'Task Comments',
            lowerText: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.'
        },
        {
            icon: icon2,
            upperText: 'Tasks Analytics',
            lowerText: 'Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. '
        },
        {
            icon: icon3,
            upperText: 'Notifications',
            lowerText: 'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.'
        },
        {
            icon: icon4,
            upperText: 'Sections & Subtasks',
            lowerText: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.'
        },
        {
            icon: icon5,
            upperText: 'Progress Tracking',
            lowerText: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.'
        },
        {
            icon: icon6,
            upperText: 'Multiple Assignees',
            lowerText: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.'
        },
        {
            icon: icon7,
            upperText: 'Support 24/7',
            lowerText: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.'
        },
        {
            icon: icon8,
            upperText: 'Data Security',
            lowerText: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.'
        },
    ]
  return (
    <>
        <section id='Organized' className='mt-[112px]'>
            <div className="container">
                <div id="Use-Row">
                    {/* ------------Header------------ */}
                    <div><h2 className='text-gray900 lg:text-[40px] text-[30px] font-extrabold text-center'>What Do You Get with Our Tool?</h2></div>
                    <div className='flex items-center justify-center'>
                        <p className='text-gray600 lg:text-lg text-sm font-normal text-center lg:w-[636px] w-full mt-6'>Make sure all your tasks are organized so you can set the priorities and focus on important.</p>
                    </div>
                    {/* ------------List------------ */}
                    <div className='flex items-center justify-between mt-[64px] gap-y-[56px] flex-wrap'>
                        {
                            MyOrganized.map((item , e)=>(
                            <div className='md:w-[298px] w-full flex items-center flex-col gap-6'>
                                <div><img src={item.icon} alt="icon" /></div>
                                <div>
                                    <h2 className='text-gray900 text-xl font-extrabold text-center'>{item.upperText}</h2>
                                    <p className='text-gray700 text-sm font-normal text-center mt-3'>{item.lowerText}</p>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Organized