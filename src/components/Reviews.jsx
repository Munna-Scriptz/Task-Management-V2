import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import pfp1 from '../assets/images/pfp1.png'
import pfp2 from '../assets/images/pfp2.png'
import pfp3 from '../assets/images/pfp3.png'
import pfp4 from '../assets/images/pfp4.png'
import pfp5 from '../assets/images/pfp5.png'
import pfp6 from '../assets/images/pfp6.png'

const Reviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <FaAngleRight />,
        prevArrow: <FaAngleLeft />
    };
    const ReviewData = [
            {
                message: 'Tellus augue commodo id quis tempus etiam sed. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Mattis pellentesque vitae mattis aliquet velit arcu risus.',
                stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaRegStar />],
                image: pfp1,
                username: 'Fannie Summers',
                role: 'Designer'
            },
            {
                message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
                stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar />],
                image: pfp2,
                username: 'Annette Black',
                role: 'Manager'
            },
            {
                message: 'Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.',
                stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar />],
                image: pfp3,
                username: 'Fannie Summers',
                role: 'Designer'
            },
            {
                message: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas..',
                stars: [<FaStar />,<FaStar />,<FaStar />,<FaRegStar />,<FaRegStar />],
                image: pfp4,
                username: 'Robert Fox',
                role: 'PR-Director'
            },
            {
                message: 'Sociis sit risus id. Sit facilisis dolor arcu, fermentum vestibulum arcu ele. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Pellentesque vitae mattis aliquet velit arcu risus...',
                stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar />],
                image: pfp5,
                username: 'Jerome Bell',
                role: 'Producer'
            },
            {
                message: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat. Faucibus cursus maecenas lorem.',
                stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaRegStar />],
                image: pfp6,
                username: 'Albert Flores',
                role: 'Developer'
            },
            {
                message: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat. Faucibus cursus maecenas lorem.',
                stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaRegStar />],
                image: pfp1,
                username: 'Albert Flores',
                role: 'Developer'
            },
            {
                message: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat. Faucibus cursus maecenas lorem.',
                stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaRegStar />],
                image: pfp4,
                username: 'Albert Flores',
                role: 'Developer'
            },
            {
                message: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat. Faucibus cursus maecenas lorem.',
                stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaRegStar />],
                image: pfp2,
                username: 'Albert Flores',
                role: 'Developer'
            },
            {
                message: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat. Faucibus cursus maecenas lorem.',
                stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaRegStar />],
                image: pfp5,
                username: 'Albert Flores',
                role: 'Developer'
            },
            {
                message: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat. Faucibus cursus maecenas lorem.',
                stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaRegStar />],
                image: pfp3,
                username: 'Albert Flores',
                role: 'Developer'
            },
            {
                message: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat. Faucibus cursus maecenas lorem.',
                stars: [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaRegStar />],
                image: pfp1,
                username: 'Albert Flores',
                role: 'Developer'
            },
        ]
  return (
    <>
        <section id='Reviews' className='mt-[112px] overflow-hidden'>
            <div className="container">
                <div id="Reviews-Row">
                    {/* ------------Header------------ */}
                    <div>
                        <h2 className='text-gray900 lg:text-[40px] text-[28px] font-extrabold text-center mb-[64px]'>Clients are Loving Our App</h2>
                    </div>
                    {/* ------------Reviews Slider------------ */}
                    <div className='flex lg:flex-row flex-col items-start justify-between'>
                        <div className='w-[250px] lg:mb-0 mb-10 lg:block hidden'>
                            <h2 className='text-gray900 lg:text-[40px] text-[26px] font-extrabold leading-[130%]'>What People Say About Us</h2>
                        </div>
                        <div className="w-[966px]">
                            <Slider {...settings}>
                                {
                                    ReviewData.map((item , e)=>(
                                        <div key={e}>
                                            <div className='lg:w-[306px] w-full px-[24px] pb-[24px] rounded-[8px]'>
                                                {/* -------Quote------ */}
                                                <div id='Quote' className='bg-brand w-[44px] h-[44px] rounded-[6px] flex items-center justify-center'>
                                                    <FaQuoteLeft className='text-[20px] text-white'/>
                                                </div>
                                                <p className='text-gray700 text-base mt-[24px] h-[156px]'>{item.message}</p>
                                                <div key={e} className='text-[#FFBA08] text-[12px] flex items-center gap-1 mt-[16px]'>
                                                    {item.stars}
                                                </div>
                                            </div>
                                            {/* ----------Profile--------- */}
                                            <div className='mt-[24px] flex items-center gap-[16px]'>
                                                <img src={item.image} alt="Profile" />
                                                <div>
                                                    <h2 className='text-gray900 text-[14px] font-bold'>{item.username}</h2>
                                                    <p className='text-gray600 text-[12px] font-normal'>{item.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Reviews