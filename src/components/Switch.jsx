import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import DarkBg from '../assets/images/DarkBg.svg'
import WhiteBg from '../assets/images/WhiteBg.svg'

const Switch = () => {
  return (
    <>
        <section id='Switch' className='mt-[112px]'>
                <div id="Switch-Row">
                      <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage src={DarkBg} srcSet={DarkBg} alt="Image one" />}
                        itemTwo={<ReactCompareSliderImage src={WhiteBg} srcSet={WhiteBg} alt="Image two" />}
                      />
                </div>
        </section>
    </>
  )
}

export default Switch